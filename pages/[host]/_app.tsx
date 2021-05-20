import { AppProps } from "next/dist/next-server/lib/router/router";
import { AppContext } from "next/app";

import "tailwindcss/tailwind.css";
import "../styles/globalStyles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = ({ ctx, Component }: AppContext) => {
  if (Component.getInitialProps && ctx.req) {
    return {
      cookies: ctx.req.headers.cookie,
    };
  }
  return {
    cookies: "",
  };
};

export default MyApp;
