import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { I18N } from "@/config/constants";

export const routing = defineRouting({
    locales: [...I18N.locales],

    defaultLocale: I18N.defaultLocale
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
