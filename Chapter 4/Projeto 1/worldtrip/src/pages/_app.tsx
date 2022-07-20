import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import RouteManager from "../container/RouteManager";
import { createServer } from "miragejs";
import "../styles/styles.css";
import { makeServer } from "../utils/mirage";

makeServer({environment: "development"});


function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RouteManager router={router}>
        <Component {...pageProps} />
      </RouteManager>
    </ChakraProvider>
  );
}

export default MyApp;
