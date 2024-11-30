import { useEffect, useState } from "react";

export function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch("./api/session");
      if (response.ok) {
        const data = await response.json();
        setSession(data);
      } else {
        setSession(null);
      }
      setLoading(false);
    }
    fetchSession();
  }, []);

  return { session, loading };
}
