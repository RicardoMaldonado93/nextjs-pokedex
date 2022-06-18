// next libraries
import type { AppProps } from "next/app";

// components
import { NextUIProvider } from "@nextui-org/react";

// styles
import "../styles/globals.css";
import { darkTheme } from "../themes";

// models
import { AppPropsWithLayout } from "../models";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
