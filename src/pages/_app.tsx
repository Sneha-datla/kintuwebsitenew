import "@/styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS



import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
