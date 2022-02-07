import Head from "next/head";
import Header from "../component/Header";
import Layout from "../component/Layout";
import Login from "../component/Login";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Liberyus Domain Service</title>
        <meta name="description" content="Liberyus domain check system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </Layout>
  );
}
