import { useState, useEffect } from "react";

const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      async function fecthQuote() {
        const response = await fetch(URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;

        setQuote(randomQuote);
        setIsLoading(false);
      },

    []
  );

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
    </div>
  );
}
