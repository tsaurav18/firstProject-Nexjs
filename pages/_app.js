import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div>hello</div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
