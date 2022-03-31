import { useState } from "react";
import { Achievements, Bosses, Graces, Quests, TabNames } from "../data/";
import CheckboxContainer from "./checkboxContainer";
import ToggleAllAccordions from "./toggleAllAccordions";
import DarkModeToggle from "../components/darkModeToggle";
import CompletedFilterButton from "../components/completedFilterButton";

interface Props {
  listName: TabNames;
}

const CompleteList = (props: Props) => {
  const { listName } = props;

  const [isAllOpen, setIsAllOpen] = useState<boolean>(false);
  const [showCompleted, setShowCompleted] = useState<boolean>(true);

  const lists = {
    [TabNames.Quests]: Quests,
    [TabNames.Achievements]: Achievements,
    [TabNames.Graces]: Graces,
    [TabNames.Bosses]: Bosses,
  };

  const dataArray = lists[listName];

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
              isAllOpen={isAllOpen}
              setIsAllOpen={setIsAllOpen}
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
          isAllOpen={isAllOpen}
        />
      ))}
    </>
  );
};

export default CompleteList;
