import { IQuote } from "../../../../@types/quote.type";

export interface IProps {
  text: string;
  color: string;
  onChangeColor: (color: string) => void;
  onChangeQuote: (quote: IQuote) => void;
}
