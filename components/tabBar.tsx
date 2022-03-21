import { Dispatch, SetStateAction } from "react";
import { TabNames } from "../data/types";
import Tab from "./tab";

interface Props {
  currentTab: TabNames;
  setCurrentTab: Dispatch<SetStateAction<TabNames>>;
}

const TabBar = (props: Props) => {
  const { currentTab, setCurrentTab } = props;

  // add all tabs in the TabNames Enum
  let tabsHtml: JSX.Element[] = [];

  // all of this feels hacky but at least it will update each time a new tab is added or removed
  for (const tabString in TabNames) {
    // this comes back first as the enum number and then the string name value which is what we want.
    if (!isNaN(Number(tabString))) {
      continue;
    }
    // converting back into enum.
    const backToTabNameEnum: TabNames =
      TabNames[tabString as keyof typeof TabNames];

    tabsHtml.push(
      <Tab
        key={backToTabNameEnum}
        tab={backToTabNameEnum}
        setCurrentTab={setCurrentTab}
        isFocused={currentTab === backToTabNameEnum}
      />
    );
  }

  return (
    <nav>
      <div className="flex justify-center">
        <div className="flex border-b-2 dark:border-zinc-700 overflow-x-auto md:overflow-hidden">
          {tabsHtml}
        </div>
      </div>
    </nav>
  );
};

export default TabBar;
