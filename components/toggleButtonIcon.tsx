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
        stroke={3} // set `stroke-width`
        strokeLinejoin="miter" // override other SVG props
      />
    );
  } else {
    icon = (
      <IconCirclePlus
        size={36} // set custom `width` and `height`
        color="#c39e66" // set `stroke` color
        stroke={3} // set `stroke-width`
        strokeLinejoin="miter" // override other SVG props
      />
    );
  }

  return icon;
};

export default ToggleButtonIcon;
