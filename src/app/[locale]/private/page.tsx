import { useTranslations } from "next-intl";

export default function PrivatePage(): React.ReactElement {
    const t = useTranslations("PrivatePage");
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start flex-1">
            {t("title")}
        </main>
    );
}
