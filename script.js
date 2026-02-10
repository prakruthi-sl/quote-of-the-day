const quotes = [
  { text: "LISP has assisted a number of our most gifted fellow humans in thinking previously impossible thoughts.", author: "Edsger W. Dijkstra" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Learning to write programs stretches your mind.", author: "Bill Gates" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" }
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random].text;
  document.getElementById("author").innerText = "— " + quotes[random].author;
}

// Show one quote on load
newQuote();