import { useTranslations } from "next-intl";

export default function HomePage(): React.ReactElement {
    const t = useTranslations("HomePage");
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start flex-1">
            {t("title")}
        </main>
    );
}
