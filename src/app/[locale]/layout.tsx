import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { Metadata } from "next";

import "@/styles/reset.css";
import "@/styles/globals.css";

import { WEBSITE } from "@/config/constants";
import { Providers } from "@/components/providers/providers";

export const metadata: Metadata = {
    title: WEBSITE.name,
    description: WEBSITE.description
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`antialiased flex flex-col`}>
                <NextIntlClientProvider messages={messages}>
                    <Providers>{children}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
