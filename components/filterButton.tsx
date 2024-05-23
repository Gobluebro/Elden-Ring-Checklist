import { IconEye, IconEyeOff } from "@tabler/icons-react";

const iconStyles = "mr-2";

interface Props {
  onClick: () => void;
  showValue: boolean;
  label: string;
}

const FilterButton = (props: Props) => {
  const { onClick, showValue, label } = props;
  return (
    <button
      className="flex rounded-full bg-elden-ring-green-100 dark:bg-elden-ring-green-600 p-3 items-center"
      onClick={onClick}
    >
      {showValue ? (
        <IconEye size={16} stroke={2} className={iconStyles} />
      ) : (
        <IconEyeOff size={16} stroke={2} className={iconStyles} />
      )}
      <span>{label}</span>
    </button>
  );
};

export default FilterButton;
