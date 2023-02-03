import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface IProps {
    id:string,
  icon: ReactElement;
  style?: Object;
  color: string;
  url: string;
}
