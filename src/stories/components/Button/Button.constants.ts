import { COLORS } from "../../constants/colors";

export const ButtonStyleMapper = {
  primary: `bg-[${COLORS.primary}] text-white`,
  secondary: `bg-[${COLORS.secondary}] text-white`,
  outline: `bg-[${COLORS.white}] text-[${COLORS.border}] border-[2px] border-[${COLORS.border}]`,
  "outline-filled": `bg-[${COLORS.opaque}] text-[${COLORS.border}] border-[2px] border-[${COLORS.border}]`,
  gradient: `text-[${COLORS.white}]`,
  success: `bg-[${COLORS.success}] text-[${COLORS.white}]`,
  warning: `bg-[${COLORS.warning}] text-[${COLORS.white}]`,
  error: `bg-[${COLORS.error}] text-[${COLORS.white}]`,
};

export const ButtonSizeMapper = {
  small: {
    textType: "caption",
    weight: "semibold",
  },
  medium: {
    textType: "paragraph",
    weight: "semibold",
  },
  large: {
    textType: "subheading1",
    weight: "semibold",
  },
};
