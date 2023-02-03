import { useEffect, useState } from "react";
import { IQuote } from "../../@types/quote.type";
import { generateColor, generateQuote } from "../../helpers";
import { Card } from "./Card";

export const Quote = () => {
  const [color, setColor] = useState(generateColor());
  const [quote, setQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    generateQuote().then((quote) => setQuote(quote));
  }, []);

  const changeQuote = (quote: IQuote) => {
    setQuote(quote);
  };

  const changeColor = (color: string) => {
    setColor(color);
  };

  return (
    <Card 
      color={color}
      quote={quote}
      changeQuote={changeQuote}
      changeColor={changeColor}
    />
  );
};
