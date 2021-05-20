import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { delay } from "../../lib/delay";

export default function Home() {
  return <div>Who We Are</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  await delay(1000, "who we are");

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
