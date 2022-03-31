import { Dispatch, SetStateAction } from "react";

interface Props {
  isAllOpen: boolean;
  setIsAllOpen: Dispatch<SetStateAction<boolean>>;
}

const ToggleAllAccordions = (props: Props) => {
  const { isAllOpen, setIsAllOpen } = props;

  return (
    <button
      className="rounded-full bg-elden-ring-green-100 dark:bg-elden-ring-green-600 p-3"
      onClick={() => setIsAllOpen(!isAllOpen)}
    >
      <span className={isAllOpen ? "block" : "hidden"}>Close All</span>
      <span className={isAllOpen ? "hidden" : "block"}>Open All</span>
    </button>
  );
};

export default ToggleAllAccordions;
