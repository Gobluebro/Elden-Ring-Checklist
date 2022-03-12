import { useEffect, useState } from "react";
import { ListType } from "../data/types";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
  list: ListType;
}

const CheckboxContainer = (props: Props) => {
  const { list } = props;
  const [isAllTrue, setIsAllTrue] = useState<boolean>(false);

  const storageKeyName = `checklist_${list.id}`;

  const [checkedState, setCheckedState] = useLocalStorage(
    storageKeyName,
    new Array(list.requirements.length).fill(false)
  );

  useEffect(() => {
    setIsAllTrue(checkedState.every(Boolean));
  }, [checkedState]);

  const toggleAllCheckboxes = () => {
    // if they are all true, flip them all to be false.
    setCheckedState(
      new Array(list.requirements.length).fill(
        !checkedState.every((value: boolean) => value === true)
      )
    );
  };

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map(
      (item: boolean, index: number) => (index === position ? !item : item)
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend>
        <input
          id={list.id}
          type="checkbox"
          checked={isAllTrue}
          onChange={() => toggleAllCheckboxes()}
        />
        <label htmlFor={list.id} className="ml-2">
          {list.name}
        </label>
      </legend>
      {list.requirements.map(({ id, description }, index) => (
        <div key={id}>
          <input
            id={id}
            type="checkbox"
            checked={checkedState[index] || false}
            onChange={() => handleOnChange(index)}
          />
          <label className="ml-2" htmlFor={id}>
            {description}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxContainer;
