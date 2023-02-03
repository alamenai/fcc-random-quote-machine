import StyledText from "./Text";
import { IProps } from "./types";

const Text = ({ color, quote }: IProps) => (
  <StyledText id="text" color={color}>{quote}</StyledText>
);
export { Text };
