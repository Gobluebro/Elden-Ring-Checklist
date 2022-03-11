import type { NextPage } from "next";
import Head from "next/head";
import DarkModeToggle from "../components/darkModeToggle";
import CompleteList from "../components/completeList";
import { useState } from "react";
import TabBar from "../components/tabBar";
import Footer from "../components/footer";
import Favicons from "../components/metaAndIcons";
import { TabNames } from "../data/types";

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<TabNames>(TabNames.Quests);

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Head>
        <title>Elden Ring Checklist</title>
        <meta
          name="description"
          content="A place to remember your progression in Elden Ring"
        />
        <Favicons />
      </Head>

      <header className="mb-2">
        <h1 className="flex justify-center">Elden Ring Checklist</h1>
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
