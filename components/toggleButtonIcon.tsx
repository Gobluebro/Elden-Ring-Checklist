import { IconCirclePlus, IconCircleX } from "@tabler/icons";

interface Props {
  isOpen: boolean;
}

// https://github.com/tabler/tabler-icons
// https://tabler-icons.io/
const ToggleButtonIcon = (props: Props) => {
  const { isOpen } = props;

  let icon;

  if (isOpen) {
    icon = (
      <IconCircleX
        size={36} // set custom `width` and `height`
        color="#c39e66" // set `stroke` color
        stroke={2} // set `stroke-width`
        role="img"
        aria-label="close list"
      />
    );
  } else {
    icon = (
      <IconCirclePlus
        size={36} // set custom `width` and `height`
        color="#c39e66" // set `stroke` color
        stroke={2} // set `stroke-width`
        role="img"
        aria-label="open list"
      />
    );
  }

  return icon;
};

export default ToggleButtonIcon;
