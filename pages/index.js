import Head from "next/head";
import Header from "../component/Header";
import Layout from "../component/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liberyus Domain Service</title>
        <meta name="description" content="Liberyus domain check system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header></Header>
      </Layout>
    </div>
  );
}
