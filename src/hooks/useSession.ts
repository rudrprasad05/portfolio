import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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

  return { session, loading, logout };
}
