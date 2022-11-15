import Layout from "../components/layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function myApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
