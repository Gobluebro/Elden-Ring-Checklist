import { Dispatch, SetStateAction } from "react";
import { TabNames } from "../data/types";

interface Props {
  tab: TabNames;
  setCurrentTab: Dispatch<SetStateAction<TabNames>>;
  isFocused: boolean;
}

const Tab = (props: Props) => {
  const { tab, setCurrentTab, isFocused } = props;

  const focusedTabStyles =
    "border rounded-t-lg bg-zinc-50 border-zinc-50 dark:bg-zinc-700 dark:border-zinc-700";

  const unfocusedTabStyles = "text-zinc-400";

  return (
    <h3
      className={`${
        isFocused ? focusedTabStyles : unfocusedTabStyles
      } px-2 mr-4`}
    >
      <button onClick={() => setCurrentTab(tab)}>{TabNames[tab]}</button>
    </h3>
  );
};

export default Tab;
