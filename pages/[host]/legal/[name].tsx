import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { delay } from "../../../lib/delay";

export default function Home() {
  return <div>legal docs here</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  await delay(1000, "legal");
  return {
    props: {},
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
