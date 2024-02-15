import { useState, useEffect } from "react";

const URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(
    () =>
      async function () {
        fecthQuote();
      },
    []
  );
  async function fecthQuote() {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;

    setQuote(randomQuote);
  }
  return (
    <div>
      <button onClick={fecthQuote}>Get Quote</button>
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
    </div>
  );
}
