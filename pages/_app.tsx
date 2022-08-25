import "../styles/globals.css";
import type { AppProps } from "next/app";

//终端执行环境变量 source .env.development
if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
