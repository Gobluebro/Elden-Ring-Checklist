import { useEffect, useState } from "react";
import { ListType, TabNames } from "../data/types";

interface Props {
  list: ListType;
  listTypeName: TabNames;
}

const CheckboxContainer = (props: Props) => {
  const { list, listTypeName } = props;

  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(list.requirements.length).fill(false)
  );
  const [isAllTrue, setIsAllTrue] = useState<boolean>(false);

  // replace spaces with underscores just because it seemed more appropriate for a localstorage item.
  const storageKeyName = `checklist_${TabNames[listTypeName]}_${list.name
    .split(" ")
    .join("_")}_${list.id}`;

  useEffect(() => {
    const checkStorage = localStorage.getItem(storageKeyName);

    if (checkStorage) {
      const storageArray: boolean[] = JSON.parse(checkStorage);
      setCheckedState(storageArray);
      if (storageArray.every((value) => value === true)) {
        setIsAllTrue(true);
      } else {
        setIsAllTrue(false);
      }
    } else {
      const storageArray = new Array(list.requirements.length).fill(false);
      setCheckedState(storageArray);
      setIsAllTrue(false);

      const storageString = JSON.stringify(storageArray);
      localStorage.setItem(storageKeyName, storageString);
    }
  }, [list.requirements.length, storageKeyName]);

  const toggleAllCheckboxes = () => {
    setIsAllTrue(!isAllTrue);

    let storageString = "";

    if (checkedState.every((value) => value === true)) {
      const allFalseArray = new Array(list.requirements.length).fill(false);

      storageString = JSON.stringify(allFalseArray);

      setCheckedState(allFalseArray);
    } else {
      const allTrueArray = new Array(list.requirements.length).fill(true);

      storageString = JSON.stringify(allTrueArray);

      setCheckedState(allTrueArray);
    }

    localStorage.setItem(storageKeyName, storageString);
  };

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const storageString = JSON.stringify(updatedCheckedState);
    localStorage.setItem(storageKeyName, storageString);

    if (updatedCheckedState.every((value) => value === true)) {
      setIsAllTrue(true);
    } else {
      setIsAllTrue(false);
    }
  };

  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend>
        <input
          type="checkbox"
          checked={isAllTrue}
          onChange={() => toggleAllCheckboxes()}
        />
        <label className="ml-2">{list.name}</label>
      </legend>
      {list.requirements.map(({ id, description }, index) => (
        <div key={id}>
          <input
            id={`chk_${list.name}_${id}`}
            type="checkbox"
            checked={checkedState[index] || false}
            onChange={() => handleOnChange(index)}
          />
          <label className="ml-2" htmlFor={`chk_${list.name}_${id}`}>
            {description}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxContainer;
