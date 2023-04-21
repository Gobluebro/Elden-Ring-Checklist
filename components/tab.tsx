import { Dispatch, SetStateAction } from "react";
import { TabData, TabNames } from "../data/";

interface Props {
  tabData: TabData;
  setCurrentTab: Dispatch<SetStateAction<TabNames>>;
  isFocused: boolean;
}

const Tab = (props: Props) => {
  const { tabData, setCurrentTab, isFocused } = props;

  const focusedTabStyles =
    "border rounded-t-lg border-transparent bg-zinc-50 dark:bg-zinc-700";

  const unfocusedTabStyles = "text-zinc-400";

  return (
    <div className="border-b-2 dark:border-zinc-700">
      <button
        className={`${
          isFocused ? focusedTabStyles : unfocusedTabStyles
        } px-2 md:px-4 text-lg xl:text-4xl lg:text-2xl dark:focus-visible:outline dark:focus-visible:outline-1 dark:focus-visible:outline-white dark:focus-visible:outline-offset-[-1px]`}
        onClick={() => setCurrentTab(tabData.enum)}
      >
        {tabData.name}
      </button>
    </div>
  );
};

export default Tab;
