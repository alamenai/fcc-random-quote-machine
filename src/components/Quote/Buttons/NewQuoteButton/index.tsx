import { IQuote } from "../../../../@types/quote.type";
import { getRandomQuote } from "../../../../api/quotes";
import { generateColor } from "../../../../helpers";
import StyledQuoteButton from "./NewQuoteButton";
import { IProps } from "./types";

const NewQuoteButton = ({
  text,
  color,
  onChangeColor,
  onChangeQuote,
}: IProps) => {
  const onRandomQuote = () => {
    onChangeColor(generateColor());
    getRandomQuote().then((quoteObject: IQuote) => onChangeQuote(quoteObject));
  };
  return (
    <StyledQuoteButton id="new-quote" onClick={onRandomQuote} color={color}>
      {text}
    </StyledQuoteButton>
  );
};

export { NewQuoteButton };
