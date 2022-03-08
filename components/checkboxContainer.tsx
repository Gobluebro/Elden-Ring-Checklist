import { useEffect, useState } from "react";
import { ListType, Requirement } from "../data/types";

interface Props {
  list: ListType;
}

interface CheckedItems {
  id: number;
  checked: boolean;
}

const CheckboxContainer = (props: Props) => {
  const { list } = props;

  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(list.requirements.length).fill(false)
  );

  const toggleAllCheckboxes = () => {
    if (checkedState.every((value) => value === true)) {
      setCheckedState(new Array(list.requirements.length).fill(false));
    } else {
      setCheckedState(new Array(list.requirements.length).fill(true));
    }
  };

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    console.log("checkedItems: ", checkedState);
  }, [checkedState]);

  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend>{list.name}</legend>
      {list.requirements.map(({ id, description }, index) => (
        <div key={id}>
          <input
            id={"chk" + id}
            type="checkbox"
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
          />
          <label className="ml-2" htmlFor={"chk" + id}>
            {description}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxContainer;
