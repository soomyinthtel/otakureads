import { clsx } from "clsx";
import { Inconsolata } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import Navigation from "./Navigation";
import { ThemeProvider } from "@/context/ThemeContext";

const inconsolata = Inconsolata({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inconsolata.className, "flex h-full flex-col")}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navigation />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
