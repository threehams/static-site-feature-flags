import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mb-4">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div>
          <Link href="/legal/privacy">
            <a>Privacy &rarr;</a>
          </Link>

          <Link href="/honda/civic">
            <a>Honda Civic &rarr;</a>
          </Link>

          <Link href="/docs">
            <a>Documentation &rarr;</a>
          </Link>

          <p>Find in-depth information about Next.js features and API.</p>

          <Link href="/learn/start">
            <a>Learn Start &rarr;</a>
          </Link>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
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
