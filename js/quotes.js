const quotes = [
  {
    quote:
      "The only thing we never get enough of is love; and the only thing we never give enough of is love.",
    author: "Henry Miller",
  },
  {
    quote: "Love is the whole thing. We are only pieces.",
    author: "Rumi",
  },
  {
    quote: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle",
  },
  {
    quote: "There is no charm equal to tenderness of the heart.",
    author: "Jane Austen",
  },
  {
    quote: "Never love anyone who treats you like you're ordinary.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Once the realization is accepted that even between the closest human beings infinite distances continue, a wonderful living side by side can grow, if they succeed in loving the distance between them which makes it possible for each to see the other whole against the sky.",
    author: "Rainer Maria Rilke",
  },
  {
    quote: "We are shaped and fashioned by what we love.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Love is a friendship set to music.",
    author: "Joseph Campbell",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = getRandomQuote(quotes.length);

quote.innerHTML = quotes[todaysQuote]["quote"];
author.innerHTML = quotes[todaysQuote]["author"];

function getRandomQuote(quoteLen) {
  return Math.floor(Math.random() * quoteLen);
}
