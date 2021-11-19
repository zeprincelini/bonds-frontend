import Head from "next/head";
import HomeLayout from "../layouts/home/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonds</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="social network, bonds, relationshp, friendshp, love, fun, entertainment"
        />
      </Head>
      <div>
        <h1>next js time</h1>
      </div>
    </>
  );
}

Home.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
