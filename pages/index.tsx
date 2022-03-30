import type { NextPage } from "next";
import Head from "next/head";
import DarkModeToggle from "../components/darkModeToggle";
import CompleteList from "../components/completeList";
import { useState } from "react";
import TabBar from "../components/tabBar";
import Footer from "../components/footer";
import MetaAndIcons from "../components/metaAndIcons";
import { TabNames } from "../data/";
import CompletedFilterButton from "../components/completedFilterButton";

const Home: NextPage = () => {
  const [currentTab, setCurrentTab] = useState<TabNames>(TabNames.Quests);
  const [showCompleted, setShowCompleted] = useState<boolean>(true);

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
        <div className="flex justify-between items-center leading-none mt-1">
          <CompletedFilterButton
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
          />
          <DarkModeToggle />
        </div>
        <CompleteList listName={currentTab} showCompleted={showCompleted} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
