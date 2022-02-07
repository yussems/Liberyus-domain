import Head from "next/head";
import Header from "../component/Header";
import Layout from "../component/Layout";
import Login from "../component/Login";
import { AuthContextProvider } from "../utils/Context";
import DomainAdd from "./domain/domain-add";

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
