import { Achievements } from "../data/achievements";
import { Bosses } from "../data/bosses";
import { Graces } from "../data/graces";
import { Quests } from "../data/quests";
import { TabNames } from "../data/types";
import CheckboxContainer from "./checkboxContainer";

interface Props {
  listName: TabNames;
}

const CompleteList = (props: Props) => {
  const { listName } = props;

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
        <CheckboxContainer key={item.id} list={item} />
      ))}
    </>
  );
};

export default CompleteList;
