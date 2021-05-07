import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type Props = {
  makeSlug: string;
  modelSlug: string;
};
const LearnStartA = ({ makeSlug, modelSlug }: Props) => {
  const { pathname } = useRouter();
  console.log(pathname.replace(/(\/variant[^\/])\//, "/"));

  return (
    <div>
      welcome to {makeSlug} {modelSlug}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  console.log(params?.host);
  return {
    props: {
      makeSlug: params?.makeSlug ?? "",
      modelSlug: params?.modelSlug ?? "",
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
