import React from "react";
import { ListType } from "../data/types";
import Checkbox from "./checkbox";

interface Props {
  quest: ListType;
}

const CheckboxContainer = (props: Props) => {
  const { quest } = props;

  return (
    <fieldset>
      <legend>quest.title</legend>
      {quest.requirements.map((req) => (
        <Checkbox key={req.id} requirement={req} />
      ))}
    </fieldset>
  );
};

export default CheckboxContainer;
