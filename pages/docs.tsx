import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  title: string;
};
const Docs = ({ title }: Props) => {
  return <div>welcome to {title}</div>;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  console.log(params);
  return {
    props: {
      title: "docs",
    },
    revalidate: 60,
  };
};

export default Docs;
