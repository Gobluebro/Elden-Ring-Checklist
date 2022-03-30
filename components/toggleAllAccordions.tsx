import { Dispatch, SetStateAction } from "react";

interface Props {
  closeAll: boolean;
  setCloseAll: Dispatch<SetStateAction<boolean>>;
}

const ToggleAllAccordions = (props: Props) => {
  const { closeAll, setCloseAll } = props;

  return (
    <button
      className="rounded-full bg-elden-ring-green-100 dark:bg-elden-ring-green-600 p-3"
      onClick={() => setCloseAll(!closeAll)}
    >
      <span className={closeAll ? "block" : "hidden"}>Close All</span>
      <span className={closeAll ? "hidden" : "block"}>Open All</span>
    </button>
  );
};

export default ToggleAllAccordions;
