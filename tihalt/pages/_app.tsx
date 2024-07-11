import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

import Wrapper from "./common/wrapper/Wrapper";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Tihalt Technologies - Best Website Development Agency in Bangalore</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="https://i0.wp.com/tihalt.com/wp-content/uploads/2019/05/cropped-favicon-1.png?fit=180%2C180&ssl=1" />
      </Head>
      <Wrapper>
      <Component {...pageProps} />
      </Wrapper>
    </MantineProvider>
  );
}
