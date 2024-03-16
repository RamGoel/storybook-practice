export type TextStyles =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle"
  | "caption"
  | "subheading1"
  | "subheading2"
  | "paragraph";
export interface TextProps {
  text: string;
  weight?: "bold" | "semibold" | "normal";
  type: TextStyles;
}
