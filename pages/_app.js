import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      //this is is optional on the current version of next js
    </Layout>
  );
}

export default MyApp;
