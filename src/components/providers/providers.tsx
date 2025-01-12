"use client";

import { AuthProvider } from "@/context/auth-context";
import { SessionProvider } from "next-auth/react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider basePath={`${basePath || ""}/api/auth`}>
            <AuthProvider>{children}</AuthProvider>
        </SessionProvider>
    );
}
