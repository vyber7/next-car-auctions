import "../styles/globals.css";
import Layout from "../components/layout";
import "../components/font-awesome";
import { SessionProvider } from "next-auth/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
