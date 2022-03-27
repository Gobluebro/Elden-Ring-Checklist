import { useEffect, useState } from "react";
import { ListType } from "../data/types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import cloneDeep from "lodash.clonedeep";
import ToggleButtonIcon from "./toggleButtonIcon";

interface Props {
  list: ListType;
}

const checkboxInputStyles =
  "rounded text-elden-ring-dark-blue focus:border-elden-ring-green-300 focus:ring focus:ring-offset-0 focus:ring-elden-ring-green-200 focus:ring-opacity-50";

const CheckboxContainer = (props: Props) => {
  const { list } = props;
  const [isAllTrue, setIsAllTrue] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [numberOfCompletedEntries, setNumberOfCompletedEntries] =
    useState<number>(0);

  const storageKeyName = `checklist_${list.id}`;

  // add all ids and default checked values into a single object key/value pair.
  const defaultValuesHash = list.requirements.reduce(
    (object, item) => ({ ...object, [item.id]: false }),
    {}
  );

  const totalEntries = Object.keys(defaultValuesHash).length;

  const [checkedState, setCheckedState] = useLocalStorage(
    storageKeyName,
    defaultValuesHash
  );

  useEffect(() => {
    const booleanArray: boolean[] = Object.values(checkedState);

    // keep every true value and count it.
    setNumberOfCompletedEntries(booleanArray.filter(Boolean).length);

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
    <fieldset className="my-4">
      <legend
        className={`border-2 border-solid ${
          isOpen ? "rounded-t" : "rounded"
        } border-elden-ring-green-500 dark:border-elden-ring-green-1000 bg-elden-ring-green-200 dark:bg-elden-ring-green-800 w-full`}
      >
        <div className="flex justify-between">
          <div className="flex items-center p-2">
            <input
              id={list.id}
              type="checkbox"
              checked={!!isAllTrue}
              onChange={() => toggleAllCheckboxes()}
              className={checkboxInputStyles}
            />
            <label
              htmlFor={list.id}
              className="ml-3 text-elden-ring-green-1000 dark:text-elden-ring-green-0 leading-none"
            >
              {list.name}
            </label>
            {list.imageUrl && (
              <div className="flex items-center ml-2">
                {/* not compatible with next export and therefore github pages. */}
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={list.imageUrl}
                  alt={list.imageAlt}
                  title={list.imageAlt}
                  width={30}
                  height={30}
                  role="img"
                />
              </div>
            )}
          </div>
          <div
            className="flex flex-1 items-center justify-end cursor-pointer p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="mr-4 text-elden-ring-green-1000 dark:text-elden-ring-green-0 select-none">
              {numberOfCompletedEntries}/{totalEntries}
            </span>
            <button>
              <ToggleButtonIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </legend>
      <div
        className={`px-2 pb-2 border-x-2 border-b-2 border-solid rounded-b border-elden-ring-green-500 dark:border-elden-ring-green-1000 bg-white dark:bg-neutral-700 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {checkedState &&
          list.requirements.map(({ id, description, url }) => (
            <div key={id}>
              <input
                id={id}
                type="checkbox"
                checked={!!checkedState[id]}
                onChange={() => handleOnChange(id)}
                className={checkboxInputStyles}
              />
              <label className="ml-2 text-black dark:text-white" htmlFor={id}>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline dark:text-elden-ring-green-150"
                  >
                    {description}
                  </a>
                ) : (
                  description
                )}
              </label>
            </div>
          ))}
      </div>
    </fieldset>
  );
};

export default CheckboxContainer;
