import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="body light">
      <Head>
        <title>Cool Calendar</title>
        <meta name="description" content="Cool Calendar using Next js" />
        <link rel="icon" href="/calendar.jpg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
