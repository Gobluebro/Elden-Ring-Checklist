import { Achievements } from "../data/achievements";
import { Bosses } from "../data/bosses";
import { Graces } from "../data/graces";
import { Quests } from "../data/quests";
import { TabNames } from "../data/types";
import CheckboxContainer from "./checkboxContainer";

interface Props {
  listName: TabNames;
  showCompleted: boolean;
}

const CompleteList = (props: Props) => {
  const { listName, showCompleted } = props;

  const lists = {
    [TabNames.Quests]: Quests,
    [TabNames.Achievements]: Achievements,
    [TabNames.Graces]: Graces,
    [TabNames.Bosses]: Bosses,
  };

  const dataArray = lists[listName];

  return (
    <>
      {dataArray.map((item) => (
        <CheckboxContainer
          key={item.id}
          list={item}
          showCompleted={showCompleted}
        />
      ))}
    </>
  );
};

export default CompleteList;
