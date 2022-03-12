import { Dispatch, SetStateAction } from "react";
import { TabNames } from "../data/types";

interface Props {
  currentTab: TabNames;
  setCurrentTab: Dispatch<SetStateAction<TabNames>>;
}

const TabBar = (props: Props) => {
  const { currentTab, setCurrentTab } = props;

  const focusedTabStyles =
    "border rounded-t-lg bg-zinc-50 border-zinc-50 dark:bg-zinc-700 dark:border-zinc-700";

  const unfocusedTabStyles = "text-zinc-400 dark:text-zinc-400";

  return (
    <nav>
      <div className="flex justify-center">
        <div className="flex border-b-2 dark:border-zinc-700">
          <h3
            className={`${
              currentTab === TabNames.Quests
                ? focusedTabStyles
                : unfocusedTabStyles
            } px-2 mr-4`}
          >
            <button onClick={() => setCurrentTab(TabNames.Quests)}>
              Quests
            </button>
          </h3>
          <h3
            className={`${
              currentTab === TabNames.Achievements
                ? focusedTabStyles
                : unfocusedTabStyles
            } px-2 ml-4`}
          >
            <button onClick={() => setCurrentTab(TabNames.Achievements)}>
              Achievements
            </button>
          </h3>
          <h3
            className={`${
              currentTab === TabNames.Graces
                ? focusedTabStyles
                : unfocusedTabStyles
            } px-2 ml-4`}
          >
            <button onClick={() => setCurrentTab(TabNames.Graces)}>
              Graces
            </button>
          </h3>
        </div>
      </div>
    </nav>
  );
};

export default TabBar;
