import { IQuote } from "../@types/quote.type";
import { getRandomQuote } from "../api/quotes";

export const generateColor = () =>
  Array.of(Math.random() * 255, Math.random() * 255, Math.random() * 255).join(
    ","
  );

export const generateQuote = async () => {
  let quote: IQuote = { quote: "", author: "" };
  await getRandomQuote().then((res) => (quote = res));
  return quote;
};
