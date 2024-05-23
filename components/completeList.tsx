import { useEffect, useState } from "react";
import { MainTabDataArray, PersonalTabDataArray, TabNames } from "../data/tabs";
import CheckboxContainer from "./checkboxContainer";
import ToggleAllAccordions from "./toggleAllAccordions";
import DarkModeToggle from "../components/darkModeToggle";
import { useLocalStorage } from "../hooks/useLocalStorage";
import FilterButton from "./filterButton";

interface Props {
  listName: TabNames;
}

const CompleteList = (props: Props) => {
  const { listName } = props;

  const [showCompleted, setShowCompleted] = useLocalStorage(
    "showCompleted",
    true
  );
  const [showDLC, setShowDLC] = useLocalStorage("showDLC", false);
  const [accordionState, setAccordionState] = useState({});

  const currentTabsDataArray = [...MainTabDataArray, ...PersonalTabDataArray];

  const currentTabListData = currentTabsDataArray.find(
    (tab) => tab.enum === listName
  )?.listData;

  // this helps make sure open all / close all functionality works properly.
  // it's making sure that everything is closed once the tab changes.
  useEffect(() => {
    const defaultValuesHash = currentTabListData?.reduce(
      (object, item) => ({ ...object, [item.id]: false }),
      {}
    );
    if (defaultValuesHash) {
      setAccordionState(defaultValuesHash);
    }
  }, [currentTabListData]);

  return (
    <>
      <div className="flex justify-between items-center leading-none mt-1">
        <div className="flex">
          <ToggleAllAccordions
            accordionState={accordionState}
            setAccordionState={setAccordionState}
          />
          <div className="ml-4">
            <FilterButton
              onClick={() => setShowCompleted(!showCompleted)}
              showValue={showCompleted}
              label="Completed"
            />
          </div>
          <div className="ml-4">
            <FilterButton
              onClick={() => setShowDLC(!showDLC)}
              showValue={showDLC}
              label="DLC"
            />
          </div>
        </div>
        <DarkModeToggle />
      </div>
      {currentTabListData?.map((item) => (
        <CheckboxContainer
          key={item.id}
          list={item}
          showCompleted={showCompleted}
          showDLC={showDLC}
          accordionState={accordionState}
          setAccordionState={setAccordionState}
        />
      ))}
    </>
  );
};

export default CompleteList;
