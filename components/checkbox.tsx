import React from "react";
import { Requirement } from "../data/types";

interface Props {
  requirement: Requirement;
}

const Checkbox = (props: Props) => {
  const { requirement } = props;

  return (
    <div>
      <input id={"chk" + requirement.id} type="checkbox" />
      <label className="ml-2" htmlFor={"chk" + requirement.id}>
        {requirement.description}
      </label>
    </div>
  );
};

export default Checkbox;
