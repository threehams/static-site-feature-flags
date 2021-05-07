import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  makeSlug: string;
  locale: string;
};
const DealPage = ({ makeSlug, locale }: Props) => {
  const { pathname } = useRouter();

  return (
    <div>
      welcome to deals for {makeSlug} on partner {locale}
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

export default DealPage;
