import { IQuote } from "./../@types/quote.type";

export const getAllQuotes = async () => {
  return await fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data.quotes);
};

export const getRandomQuote = () => {
  const randomQuote = getAllQuotes().then(quotes=>quotes[Math.ceil(Math.random() * 101)]) ;
  return randomQuote;
};
