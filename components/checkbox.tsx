import React from "react";
import { QuestType } from "../data/quests";

interface Props {
  quest: QuestType;
}

const Checkbox = (props: Props) => {
  const { quest } = props;

  return (
    <div>
      <input id={"chk" + quest.id} type="checkbox" />
      <label htmlFor={"chk" + quest.id}></label>
    </div>
  );
};

export default Checkbox;
