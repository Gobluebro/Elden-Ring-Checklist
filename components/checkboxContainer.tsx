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

  // replace spaces with underscores just because it seemed more appropriate for a localstorage item.
  const storageKeyName = `checklist_${TabNames[listTypeName]}_${list.name
    .split(" ")
    .join("_")}_${list.id}`;

  useEffect(() => {
    const checkStorage = localStorage.getItem(storageKeyName);

    if (checkStorage) {
      const storageArray = JSON.parse(checkStorage);
      setCheckedState(storageArray);
    } else {
      const storageArray = new Array(list.requirements.length).fill(false);
      setCheckedState(storageArray);

      const storageString = JSON.stringify(storageArray);
      localStorage.setItem(storageKeyName, storageString);
    }
  }, [list.requirements.length, storageKeyName]);

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

    const storageString = JSON.stringify(updatedCheckedState);
    localStorage.setItem(storageKeyName, storageString);
  };

  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend>{list.name}</legend>
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
