import type { NextPage } from "next";
import Head from "next/head";
import CheckboxContainer from "../components/checkboxContainer";
import { Quests } from "../data/quests";

const Home: NextPage = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div>
      <Head>
        <title>Elden Ring Checklist</title>
        <meta
          name="description"
          content="A place to remember your progression in Elden Ring"
        />
        <link rel="icon" href={prefix + "/favicon.ico"} />
      </Head>

      <main>
        <h1>Welcome to Elden Ring Checklist!</h1>
        <h2>Quests:</h2>
        {Quests.map((quest) => (
          <CheckboxContainer key={quest.id} quest={quest} />
        ))}
      </main>
      <footer className="flex justify-center">
        <span>
          Check out the project on{" "}
          <a href="https://github.com/Gobluebro/Elden-Ring-Checklist">Github</a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
