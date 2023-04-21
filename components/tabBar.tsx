import { Dispatch, SetStateAction } from "react";
import { TabDataArray, TabNames } from "../data/";
import Tab from "./tab";

interface Props {
  currentTab: TabNames;
  setCurrentTab: Dispatch<SetStateAction<TabNames>>;
}

const TabBar = (props: Props) => {
  const { currentTab, setCurrentTab } = props;

  const tabsHtml = TabDataArray.map((tab) => {
    return (
      <Tab
        key={tab.id}
        tabData={tab}
        setCurrentTab={setCurrentTab}
        isFocused={currentTab === tab.enum}
      />
    );
  });

  return (
    <nav>
      <div className="flex justify-center">
        <div className="flex overflow-x-auto md:overflow-hidden">
          {tabsHtml}
        </div>
      </div>
    </nav>
  );
};

export default TabBar;
