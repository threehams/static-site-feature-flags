import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { delay } from "../../../../lib/delay";

type Props = {
  locale: string;
  paymentType: string;
};
const DealPage = ({ paymentType, locale }: Props) => {
  const { pathname } = useRouter();

  return (
    <div>
      welcome to {paymentType} calculator on partner {locale}
      the pathname is {pathname}
      <div>
        <Link href="/">
          <a>go home &rarr;</a>
        </Link>{" "}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  await delay(1000, "calculator");
  return {
    props: {
      paymentType:
        typeof params?.paymentType === "string" ? params.paymentType : "",
      locale: params?.host?.split(".")[0] ?? "",
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

export default DealPage;
