"use client";

import { createContext, useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { API, ROUTES } from "@/config/constants";
import type { User } from "next-auth";

type AuthContextType = {
    signOut: () => Promise<void>;
    signIn: () => Promise<void>;
    user: User | null;
    isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    const handleSignOut = async () => {
        await signOut({
            redirect: true,
            callbackUrl: API.BASE_PATH + ROUTES.HOME
        });
    };

    const handleSignIn = async () => {
        await signIn("discord", {
            callbackUrl: API.BASE_PATH + ROUTES.PRIVATE
        });
    };

    return (
        <AuthContext.Provider
            value={{
                signOut: handleSignOut,
                signIn: handleSignIn,
                user: session?.user || null,
                isLoading: status === "loading"
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
