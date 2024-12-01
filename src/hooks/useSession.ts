import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useSession() {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch("./api/session");
      if (response.ok) {
        const data = await response.json();
        setSession(data);
      } else {
        console.log(response);
        setSession(null);
      }
      setLoading(false);
    }
    fetchSession();
  }, []);

  const logout = () => {
    // Remove token from cookies (or local storage if that's where it's stored)
    Cookies.remove("token");
    setSession(null);

    router.replace("/auth/login"); // Redirect to login page after logout
  };
  const login = async (data: { email: string; password: string }) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Successfully Logged in");
        Cookies.set("token", result.token, { expires: 1 }); // Store token in cookies for 1 day
        router.refresh();
        router.push("/admin"); // Redirect to /admin page
        // Refresh the page
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

  return { session, loading, logout, login };
}