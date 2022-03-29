import { IconEye, IconEyeOff } from "@tabler/icons";
import { Dispatch, SetStateAction } from "react";

interface Props {
  showCompleted: boolean;
  setShowCompleted: Dispatch<SetStateAction<boolean>>;
}

const iconStyles = "mr-2";

const CompletedFilterButton = (props: Props) => {
  const { showCompleted, setShowCompleted } = props;

  return (
    <button
      className="flex rounded-full bg-elden-ring-green-100 dark:bg-elden-ring-green-600 p-3 items-center"
      onClick={() => setShowCompleted(!showCompleted)}
    >
      {showCompleted ? (
        <IconEye size={16} stroke={2} className={iconStyles} />
      ) : (
        <IconEyeOff size={16} stroke={2} className={iconStyles} />
      )}
      <span>Filter Completed</span>
    </button>
  );
};

export default CompletedFilterButton;
