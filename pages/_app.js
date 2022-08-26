// import "./stylesheet.scss";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
