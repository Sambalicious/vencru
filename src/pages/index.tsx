import { DashboardLayout } from "@/components/organisms";
import { SettingsTab } from "@/components/organisms/SettingsTab";
import { NextPageWithLayout } from "@/types/page";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Settings: NextPageWithLayout = () => {
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
        <SettingsTab
          pageTitle={"Settings"}
          pageSubTitle={"Manage your team and preferences here."}
        />
      </main>
    </div>
  );
};

Settings.getLayout = page => {
  return <DashboardLayout>{page} </DashboardLayout>;
};
export default Settings;
