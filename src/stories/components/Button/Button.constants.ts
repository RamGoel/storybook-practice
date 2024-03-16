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
    className:'py-[10px] px-[16px]'
  },
  medium: {
    textType: "caption",
    className:'py-[12px] px-[16px]'
  },
  large: {
    textType: "paragraph",
    className:'py-[16px] px-[16px]'
  },
  xlarge: {
    textType: "paragraph",
    className:'py-[20px] px-[16px]'
  },
};
