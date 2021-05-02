import { GetStaticProps } from "next";
import { useRouter } from "next/router";

type Props = {
  title: string;
};
const LearnStartA = ({ title }: Props) => {
  const { pathname } = useRouter();
  console.log(pathname.replace(/(\/variant[^\/])\//, "/"));

  return <div>welcome to {title}</div>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  console.log("static B");

  return {
    props: {
      title: "start B",
    },
    revalidate: 60,
  };
};

export default LearnStartA;
