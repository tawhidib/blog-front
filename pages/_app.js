import TopBar from "../components/TopBar/TopBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
