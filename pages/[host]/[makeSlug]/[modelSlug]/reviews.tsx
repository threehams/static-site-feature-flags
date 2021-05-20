import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { delay } from "../../../../lib/delay";

type Props = {
  makeSlug: string;
  modelSlug: string;
  locale: string;
};
const DealPage = ({ makeSlug, modelSlug, locale }: Props) => {
  const { pathname } = useRouter();

  return (
    <div>
      welcome to reviews for {makeSlug} {modelSlug} on partner {locale}
      the pathname is {pathname}
      <div>
        <Link href="/">
          <a>go home &rarr;</a>
        </Link>{" "}
      </div>
    </div>
  );
};

DealPage.getInitialProps = async ({ params, locale }) => {
  await delay(500, "reviews");
  return {
    makeSlug: params?.makeSlug,
    modelSlug: params?.modelSlug,
    locale: locale ?? "",
  };
};
// export const getStaticProps: GetStaticProps<Props> = async ({
//   params,
//   locale,
// }) => {
//   await delay(1000, "reviews");
//   return {
//     props: {
//       makeSlug: (params?.makeSlug as string) ?? "",
//       modelSlug: (params?.modelSlug as string) ?? "",
//       locale: locale ?? "",
//     },
//     revalidate: 60,
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };

export default DealPage;
