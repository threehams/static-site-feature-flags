import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { delay } from "../../../lib/delay";

type Props = {
  condition: string;
  locale: string;
};
const MarketplaceLandingPage = ({ condition, locale }: Props) => {
  const { pathname } = useRouter();

  return (
    <div>
      welcome to marketplace {condition} page on partner {locale}, the pathname
      is {pathname}
      <div>
        <Link href="/">
          <a>go home &rarr;</a>
        </Link>{" "}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  locale,
}) => {
  await delay(1000, "marketplace search");
  return {
    props: {
      condition: typeof params?.condition === "string" ? params.condition : "",
      locale: locale ?? "",
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default MarketplaceLandingPage;
