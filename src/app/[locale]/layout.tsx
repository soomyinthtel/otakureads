import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import BaseLayout from "@/components/BaseLayout";
import { routing } from "@/i18n/routing";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout(props: Props) {
  const { children, params } = props;
  const { locale } = await params;
  if (!routing.locales.includes(locale as "jp" | "en")) {
    notFound();
  }
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
