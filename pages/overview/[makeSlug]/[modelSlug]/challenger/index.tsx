import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { delay } from "../../../../../lib/delay";

type Props = {
  makeSlug: string;
  modelSlug: string;
  feature: string;
  locale: string;
};
const LearnStartA = ({ makeSlug, modelSlug, feature, locale }: Props) => {
  const { pathname } = useRouter();
  console.log(pathname.replace(/(\/variant[^\/])\//, "/"));

  return (
    <div>
      welcome to {makeSlug} {modelSlug} on {feature} on partner {locale}
      <div>
        <Link href="/">
          <a>Home &rarr;</a>
        </Link>{" "}
        <Link href="/legal/privacy">
          <a>Privacy &rarr;</a>
        </Link>
        <Link href="/honda/civic">
          <a>Honda Civic &rarr;</a>
        </Link>
        <Link href="/docs">
          <a>Documentation &rarr;</a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
  locale,
}) => {
  await delay(1000, "model overview challenger");
  if (params?.makeSlug !== "honda") {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      makeSlug: params.makeSlug,
      modelSlug: (params?.modelSlug as string) ?? "",
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

export default LearnStartA;
