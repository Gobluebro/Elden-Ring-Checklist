import { Achievements } from "../data/achievements";
import { Bosses } from "../data/bosses";
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

  //TODO: possibly make these enums and arrays into a key value pair and then just their data back based on the key enum?
  if (listName === TabNames.Quests) {
    dataArray = Quests;
  } else if (listName === TabNames.Achievements) {
    dataArray = Achievements;
  } else if (listName === TabNames.Graces) {
    dataArray = Graces;
  } else if (listName === TabNames.Bosses) {
    dataArray = Bosses;
  }

  return (
    <>
      {dataArray.map((item) => (
        <CheckboxContainer key={item.id} list={item} />
      ))}
    </>
  );
};

export default CompleteList;
