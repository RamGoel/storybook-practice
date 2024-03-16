export type ButtonTypeProps =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-filled"
  | "gradient"
  | "success"
  | "warning"
  | "error"
  | "icon";
export interface ButtonProps {
  type?: ButtonTypeProps;
  size?: "small" | "medium" | "large";
  label: string;
  icon?: any;
  onClick?: () => void;
}
