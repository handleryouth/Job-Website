import "../styles/globals.css";
import "@fontsource/spartan";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "features";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
