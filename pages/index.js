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
      <h3>testing</h3>
    </>
  );
}

Home.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
