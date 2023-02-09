import { DashboardLayout } from "@/components/organisms";
import Head from "next/head";
import Settings from "../components/page/Settings";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vencru</title>
        <meta
          name="description"
          content="Simple accounting software for small businesses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Settings />
      </main>
    </div>
  );
}

Home.getLayout = (page: any) => {
  return <DashboardLayout>{page} </DashboardLayout>;
};
export default Home;
