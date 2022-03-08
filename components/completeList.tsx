import { Achievements } from "../data/achievements";
import { Quests } from "../data/quests";
import CheckboxContainer from "./checkboxContainer";

interface Props {
  listName: "Quests" | "Achievements";
}

const CompleteList = (props: Props) => {
  const { listName } = props;

  const dataArray = listName === "Quests" ? Quests : Achievements;

  return (
    <>
      <h2>{listName}:</h2>
      {dataArray.map((item) => (
        <CheckboxContainer key={item.id} list={item} listTypeName={listName} />
      ))}
    </>
  );
};

export default CompleteList;
