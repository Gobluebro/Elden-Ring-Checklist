import { useEffect, useState } from "react";
import { ListType, TabDataArray, TabNames } from "../data/";
import CheckboxContainer from "./checkboxContainer";
import ToggleAllAccordions from "./toggleAllAccordions";
import DarkModeToggle from "../components/darkModeToggle";
import CompletedFilterButton from "../components/completedFilterButton";

interface Props {
  listName: TabNames;
}

const CompleteList = (props: Props) => {
  const { listName } = props;

  const [showCompleted, setShowCompleted] = useState<boolean>(true);
  const [accordionState, setAccordionState] = useState({});

  const currentTabListData = TabDataArray.find(
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
          <CompletedFilterButton
            showCompleted={showCompleted}
            setShowCompleted={setShowCompleted}
          />
          <div className="ml-4">
            <ToggleAllAccordions
              accordionState={accordionState}
              setAccordionState={setAccordionState}
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
          accordionState={accordionState}
          setAccordionState={setAccordionState}
        />
      ))}
    </>
  );
};

export default CompleteList;
