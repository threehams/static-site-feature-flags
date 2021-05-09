import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { delay } from "../../../lib/delay";

type HomeProps = {
  locale: string;
};
export default function Home({ locale }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Partner Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mb-4">
          Welcome to Partner{" "}
          <a href="https://nextjs.org">Next.js on partner: {locale}</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div>
          <Link href="/legal/privacy">
            <a>Privacy &rarr;</a>
          </Link>

          <Link href="/car-loan-calculator">
            <a>Loan Calculator &rarr;</a>
          </Link>

          <Link href="/car-lease-calculator">
            <a>Lease Calculator &rarr;</a>
          </Link>

          <Link href="/honda">
            <a>Honda &rarr;</a>
          </Link>

          <Link href="/honda/deals">
            <a>Honda Deals &rarr;</a>
          </Link>

          <Link href="/honda/civic">
            <a>Honda Civic &rarr;</a>
          </Link>

          <Link href="/honda/civic/reviews">
            <a>Honda Reviews &rarr;</a>
          </Link>

          <Link href="/docs">
            <a>Documentation &rarr;</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  await delay(1000, "partner home");
  return {
    props: {
      title: "hi",
      locale: locale ?? "",
    },
    revalidate: 60,
  };
};
