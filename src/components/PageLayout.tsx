import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import ExternalLink from "./ExternalLink";

type Props = {
  children?: ReactNode;
  title?: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations("PageLayout");

  return (
    <div className="relative flex grow flex-col">
      <div className="relative flex grow flex-col">
        <div className="md:text-lg">{children}</div>
      </div>
    </div>
  );
}
