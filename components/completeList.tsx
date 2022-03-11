import { Achievements } from "../data/achievements";
import { Graces } from "../data/graces";
import { Quests } from "../data/quests";
import { ListType, TabNames } from "../data/types";
import CheckboxContainer from "./checkboxContainer";

interface Props {
  listName: TabNames;
}

const CompleteList = (props: Props) => {
  const { listName } = props;

  let dataArray: Array<ListType> = [];
  if (listName === TabNames.Quests) {
    dataArray = Quests;
  } else if (listName === TabNames.Achievements) {
    dataArray = Achievements;
  } else if (listName === TabNames.Graces) {
    dataArray = Graces;
  }

  return (
    <>
      {dataArray.map((item) => (
        <CheckboxContainer key={item.id} list={item} listTypeName={listName} />
      ))}
    </>
  );
};

export default CompleteList;
