import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { delay } from "../../../../lib/delay";

type Props = {
  makeSlug: string;
  feature: string;
  locale: string;
};
const MakeOverview = ({ makeSlug, feature, locale }: Props) => {
  const { pathname } = useRouter();

  return (
    <div>
      welcome to {makeSlug} make overview on {feature} on partner {locale}
      the pathname is {pathname}
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
  await delay(1000, "make overview challenger");
  if (params?.makeSlug !== "honda") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      makeSlug: params.makeSlug,
      feature: "challenger",
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

export default MakeOverview;
