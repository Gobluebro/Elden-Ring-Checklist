import { useEffect, useState } from "react";
import { ListType } from "../data/types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import cloneDeep from "lodash.clonedeep";

interface Props {
  list: ListType;
}

const CheckboxContainer = (props: Props) => {
  const { list } = props;
  const [isAllTrue, setIsAllTrue] = useState<boolean>(false);

  const storageKeyName = `checklist_${list.id}`;

  // add all ids and default checked values into a single object key/value pair.
  const defaultValuesHash = list.requirements.reduce(
    (object, item) => ({ ...object, [item.id]: false }),
    {}
  );

  const [checkedState, setCheckedState] = useLocalStorage(
    storageKeyName,
    defaultValuesHash
  );

  useEffect(() => {
    const booleanArray: boolean[] = Object.values(checkedState);

    // short hand version of checking if every value is true.
    setIsAllTrue(booleanArray.every(Boolean));
  }, [checkedState]);

  const toggleAllCheckboxes = () => {
    const booleanArray: boolean[] = Object.values(checkedState);

    // if they are all true, get back false to assign to every id.
    const toggleBoolean = !booleanArray.every(Boolean);

    // just recreate the single object with all values set to the toggleBoolean.
    const flippedCheckedHash = list.requirements.reduce(
      (object, item) => ({ ...object, [item.id]: toggleBoolean }),
      {}
    );

    setCheckedState(flippedCheckedHash);
  };

  const handleOnChange = (id: string) => {
    const newCheckData = cloneDeep(checkedState);

    newCheckData[id] = !newCheckData[id];

    setCheckedState(newCheckData);
  };

  return (
    <fieldset className="border border-solid border-gray-300 p-3">
      <legend>
        <input
          id={list.id}
          type="checkbox"
          checked={!!isAllTrue}
          onChange={() => toggleAllCheckboxes()}
          className="scale-150"
        />
        <label htmlFor={list.id} className="ml-3 font-bold text-lg">
          {list.name}
        </label>
      </legend>
      {checkedState &&
        list.requirements.map(({ id, description }) => (
          <div key={id}>
            <input
              id={id}
              type="checkbox"
              checked={!!checkedState[id]}
              onChange={() => handleOnChange(id)}
              className="scale-110"
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
