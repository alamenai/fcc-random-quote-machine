import StyledButton from "./ShareButton";
import { IProps } from "./types";

export const ShareButton = ({ id, icon, style, color, url }: IProps) => {
  return (
    
      <a href={url} target='_blank'><StyledButton style={style} color={color}>
        {icon}
    </StyledButton>
      </a>
  );
};
