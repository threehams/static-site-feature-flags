import { GetStaticPaths, GetStaticProps } from "next";
import { delay } from "../lib/delay";

type Props = {
  title: string;
};
const Docs = ({ title }: Props) => {
  return <div>welcome to {title}</div>;
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  await delay(1000, "docs");
  return {
    props: {
      title: "docs",
    },
    revalidate: 60,
  };
};

export default Docs;
