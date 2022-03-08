import { Quests } from "../data/quests";
import CheckboxContainer from "./checkboxContainer";

const QuestList = () => {
  return (
    <>
      <h2>Quests:</h2>
      {Quests.map((quest) => (
        <CheckboxContainer key={quest.id} list={quest} />
      ))}
    </>
  );
};

export default QuestList;
