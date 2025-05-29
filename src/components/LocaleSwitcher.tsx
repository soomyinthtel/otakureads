"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.

        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Globe className="cursor-pointer hover:text-primary transition-all ease-in" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={cn(
          "relative text-black bg-white rounded-2xl",
          isPending && "transition-opacity [&:disabled]:opacity-30"
        )}
      >
        {routing.locales.map((cur) => (
          <DropdownMenuItem key={cur} onSelect={() => onSelectChange(cur)}>
            {t("locale", { locale: cur })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
