import React from "react";
import { QuestType } from "../data/quests";
import Checkbox from "./checkbox";

interface Props {
  quest: QuestType;
}

const CheckboxContainer = (props: Props) => {
  const { quest } = props;

  return (
    <fieldset>
      <legend>quest.title</legend>
      <Checkbox quest={quest} />
    </fieldset>
  );
};

export default CheckboxContainer;
