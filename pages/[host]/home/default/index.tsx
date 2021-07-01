import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { delay } from "../../../../lib/delay";

type HomeProps = {};
export default function Home({}: HomeProps) {
  return (
    <div>
      <Head>
        <title>Partner Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mb-4">Home</h1>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ params }) => {
  return {
    props: {
      title: "hi",
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
