import { Dispatch, SetStateAction } from "react";

interface Props {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<"Quests" | "Achievements">>;
}

const TabBar = (props: Props) => {
  const { currentTab, setCurrentTab } = props;

  const focusedTabStyles =
    "border rounded-t-lg dark:bg-zinc-700 dark:border-zinc-700";

  const unfocusedTabStyles = "dark:text-zinc-400";

  return (
    <nav>
      <div className="flex justify-center">
        <div className="flex border-b-2 dark:border-zinc-700">
          <h3
            className={`${
              currentTab === "Quests" ? focusedTabStyles : unfocusedTabStyles
            } px-2 mr-4`}
          >
            <button onClick={() => setCurrentTab("Quests")}>Quests</button>
          </h3>
          <h3
            className={`${
              currentTab === "Achievements"
                ? focusedTabStyles
                : unfocusedTabStyles
            } px-2 ml-4`}
          >
            <button onClick={() => setCurrentTab("Achievements")}>
              Achievements
            </button>
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default TabBar;
