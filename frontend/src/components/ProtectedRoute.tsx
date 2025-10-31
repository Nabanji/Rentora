import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import type { Session, User } from "@supabase/supabase-js";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [ user, setUser ] = useState<User | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        const checkSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) console.error("Session check error:", error);
            setUser(data?.session?.user ?? null);
            setLoading(false);
        };

        checkSession();

        // Listen for auth state changes
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session: Session | null) => {
                setUser(session?.user ?? null);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        }
    }, []);

    if (loading) return <p>Loading...</p>;

    if (!user) {
        return <Navigate to="/" replace />
    }

    return <>{children}</>;
}

export default ProtectedRoute;
