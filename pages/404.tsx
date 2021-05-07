import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return <h1>404 - Page Not Found. Matched path: {router.asPath}</h1>;
}
