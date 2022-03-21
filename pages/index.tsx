import type { NextPage } from "next";
import Head from "next/head";
import DarkModeToggle from "../components/darkModeToggle";
import CompleteList from "../components/completeList";
import { useState } from "react";
import TabBar from "../components/tabBar";
import Footer from "../components/footer";
import MetaAndIcons from "../components/metaAndIcons";
import { TabNames } from "../data/types";

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<TabNames>(TabNames.Quests);

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Head>
        <title>Elden Ring Checklist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <MetaAndIcons />
      </Head>

      <header className="mb-2">
        <h1 className="flex justify-center text-2xl md:text-5xl">
          Elden Ring Checklist
        </h1>
      </header>

      <TabBar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-1">
        <div className="flex justify-between items-center leading-none my-4">
          <h2>{TabNames[currentTab]}:</h2>
          <DarkModeToggle />
        </div>
        <CompleteList listName={currentTab} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
