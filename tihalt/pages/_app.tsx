import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Web Design Company in Bangalore | Website Development Company in Bangalore - Tihalt</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="https://i0.wp.com/tihalt.com/wp-content/uploads/2019/05/cropped-favicon-1.png?fit=180%2C180&ssl=1" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
