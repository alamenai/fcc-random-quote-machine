import { IQuote } from "./../../../@types/quote.type";

export interface IProps {
  color: string;
  quote: IQuote;
  changeColor: (color: string) => void;
  changeQuote: (quote: IQuote) => void;
}
