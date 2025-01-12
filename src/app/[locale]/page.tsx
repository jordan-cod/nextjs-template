"use client";

import { useAuth } from "@/context/auth-context";
import { useTranslations } from "next-intl";

export default function HomePage(): React.ReactElement {
    const t = useTranslations("HomePage");
    const { signIn } = useAuth();
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start flex-1">
            {t("title")}
            <button onClick={signIn}>{t("signIn")}</button>
        </main>
    );
}
