"use client";

import { useAuth } from "@/context/auth-context";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PrivatePage(): React.ReactElement {
    const t = useTranslations("PrivatePage");
    const { signOut, user } = useAuth();
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start flex-1">
            {t("title")}
            {user && (
                <>
                    <p>{t("userInfo", { name: user.name })}</p>
                    {user.image && (
                        <Image
                            src={user.image}
                            alt={user.name + " avatar"}
                            width={100}
                            height={100}
                            priority
                        />
                    )}
                    <button onClick={signOut}>{t("signOut")}</button>
                </>
            )}
        </main>
    );
}
