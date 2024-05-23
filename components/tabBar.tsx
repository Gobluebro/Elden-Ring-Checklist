import { Dispatch, SetStateAction } from "react";
import { MainTabDataArray, PersonalTabDataArray, TabNames } from "../data/tabs";
import Tab from "./tab";

interface Props {
  currentTab: TabNames;
  setCurrentTab: Dispatch<SetStateAction<TabNames>>;
}

const TabBar = (props: Props) => {
  const { currentTab, setCurrentTab } = props;

  const mainTabsHtml = MainTabDataArray.map((tab) => {
    return (
      <Tab
        key={tab.id}
        tabData={tab}
        setCurrentTab={setCurrentTab}
        isFocused={currentTab === tab.enum}
      />
    );
  });

  const personalTabsHtml = PersonalTabDataArray.map((tab) => {
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
      <span className="flex justify-center text-zinc-400">Main</span>
      <div className="flex justify-center">
        <div className="flex overflow-x-auto md:overflow-hidden">
          {mainTabsHtml}
        </div>
      </div>
      <span className="mt-4 flex justify-center text-zinc-400">Personal</span>
      <div className="flex justify-center">
        <div className="flex overflow-x-auto md:overflow-hidden">
          {personalTabsHtml}
        </div>
      </div>
    </nav>
  );
};

export default TabBar;
