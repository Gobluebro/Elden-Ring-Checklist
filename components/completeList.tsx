import { useEffect, useState } from "react";
import {
  Achievements,
  Bosses,
  Graces,
  Miscellaneous,
  Quests,
  TabNames,
} from "../data/";
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

  const lists = {
    [TabNames.Quests]: Quests,
    [TabNames.Achievements]: Achievements,
    [TabNames.Graces]: Graces,
    [TabNames.Bosses]: Bosses,
    [TabNames.Misc]: Miscellaneous,
  };

  const dataArray = lists[listName];

  useEffect(() => {
    const defaultValuesHash = dataArray.reduce(
      (object, item) => ({ ...object, [item.id]: false }),
      {}
    );
    setAccordionState(defaultValuesHash);
  }, [dataArray]);

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
      {dataArray.map((item) => (
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
