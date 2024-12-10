"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { API_URL } from "@/const";

// Types for User and Session
interface User {
  email: string;
  id: number;
  name: string;
  hashedPassword: string;
  createdAt: Date;
  type: any;
}

interface Session {
  user: User;
  isLoggedIn: boolean;
}

// Context type
interface SessionContextType {
  session: Session | null;
  loading: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  register: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
}

// Create context
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Provider component
export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetch(API_URL + "/token", {
        method: "POST",
        headers: { Authorization: `${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setSession({ user: data.user, isLoggedIn: true });
        })
        .catch(() => {
          Cookies.remove("token");
          setSession(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setSession(null);
    router.replace("/auth/login");
  };

  const register = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch(API_URL + "/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Successfully Registered");
        setSession({ user: result.user, isLoggedIn: true });
        Cookies.set("token", result.token, { expires: 1 });
        router.push("/admin");
      } else {
        const error = await response.json();
        console.error("Register failed:", error);
        toast.error("Registration failed");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Unexpected error occurred");
    }
  };

  const login = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch(API_URL + "/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Successfully Logged in");
        setSession({ user: result.user, isLoggedIn: true });
        Cookies.set("token", result.token, { expires: 1 });
        router.push("/admin");
      } else {
        const error = await response.json();
        console.error("Login failed:", error);
        toast.error("Login failed");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Unexpected error occurred");
    }
  };

  return (
    <SessionContext.Provider
      value={{ session, loading, login, register, logout }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
