import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  makeSlug: string;
  modelSlug: string;
  feature: string;
  locale: string;
};
const MakeOverview = ({ makeSlug, modelSlug, feature, locale }: Props) => {
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
  return {
    props: {
      makeSlug: params?.makeSlug ?? "",
      modelSlug: params?.modelSlug ?? "",
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
