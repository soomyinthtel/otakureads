import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageLayout from "@/components/PageLayout";
import HomeLanding from "@/components/home/HomeLanding";
import Trending from "@/components/trending/trending";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PageContent />;
}

function PageContent() {
  const t = useTranslations("IndexPage");

  return (
    <PageLayout title={t("title")}>
      {/* <p className="">
        {t.rich("description", {
          span: (chunks) => (
            <span className="font-mono text-white">{chunks}</span>
          ),
        })}
      </p> */}
      <HomeLanding />
      <Trending />
    </PageLayout>
  );
}
