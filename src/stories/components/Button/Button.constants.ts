export const ButtonStyleMapper:any = {
  primary: `bg-primary text-white`,
  secondary: `bg-secondary text-white`,
  outline: `bg-white text-border border-[2px] border-border`,
  "outline-filled": `bg-opaque text-border border-[2px] border-border`,
  gradient: `text-white`,
  success: `bg-success text-white`,
  warning: `bg-warning text-white`,
  error: `bg-error text-white`,
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
