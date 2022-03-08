import React from "react";
import { ListType } from "../data/types";
import Checkbox from "./checkbox";

interface Props {
  list: ListType;
}

const CheckboxContainer = (props: Props) => {
  const { list } = props;

  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend>{list.name}</legend>
      {list.requirements.map((req) => (
        <Checkbox key={req.id} requirement={req} />
      ))}
    </fieldset>
  );
};

export default CheckboxContainer;
