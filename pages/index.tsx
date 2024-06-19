import type { NextPage } from "next";
import Head from "next/head";
import CompleteList from "../components/completeList";
import { useEffect, useState } from "react";
import TabBar from "../components/tabBar";
import Footer from "../components/footer";
import MetaAndIcons from "../components/metaAndIcons";
import { TabNames } from "../data/tabs";

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<TabNames>(TabNames.Default);
    
  useEffect(() => {
    if (currentTab == TabNames.Default)
      return;

    // on tab change, update hash
    window.location.hash = TabNames[currentTab];
  }, [currentTab]);

  useEffect(() => {
    // on page load, check for hash and change tab, if applicable
    var hashValue = window.location.hash ? window.location.hash.replace('#', '') : '';
    var selectedTab = hashValue as keyof typeof TabNames;

    if (hashValue && selectedTab in TabNames) { 
      setCurrentTab(TabNames[selectedTab])
    } else {
      setCurrentTab(TabNames.Quests)
    }
  }, []);

  return (
    <div className="container flex flex-col min-h-screen mx-auto">
      <Head>
        <title>Elden Ring Checklist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <MetaAndIcons />
      </Head>

      <header className="mb-4">
        <h1 className="flex justify-center text-2xl md:text-5xl">
          Elden Ring Checklist
        </h1>
      </header>

      <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-1 mx-2 mt-4">
        <CompleteList listName={currentTab} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
