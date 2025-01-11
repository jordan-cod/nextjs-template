import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/reset.css";
import "./globals.css";
import { WEBSITE } from "@/config/constants";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: WEBSITE.name,
    description: WEBSITE.description
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
            >
                {children}
            </body>
        </html>
    );
}
