import Layout from "../component/Layout";
import "../styles/globals.css";
import { AuthContextProvider } from "../utils/Context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
