const quotes = [
{q:"Talk is cheap. Show me the code.",a:"Linus Torvalds"},
{q:"Programs must be written for people to read.",a:"Harold Abelson"},
{q:"The best way to predict the future is to invent it.",a:"Alan Kay"},
{q:"LISP has assisted a number of gifted humans.",a:"Edsger Dijkstra"},
{q:"Code is like humor. When you have to explain it, it’s bad.",a:"Cory House"},
{q:"First, solve the problem. Then, write the code.",a:"John Johnson"},
{q:"Experience is the name everyone gives to their mistakes.",a:"Oscar Wilde"},
{q:"Java is to JavaScript what car is to Carpet.",a:"Chris Heilmann"},
{q:"In order to be irreplaceable, one must always be different.",a:"Coco Chanel"},
{q:"Knowledge is power.",a:"Francis Bacon"},
{q:"Any fool can write code that a computer can understand.",a:"Martin Fowler"},
{q:"Simplicity is the soul of efficiency.",a:"Austin Freeman"},
{q:"The future depends on what you do today.",a:"Mahatma Gandhi"},
{q:"Dream big and dare to fail.",a:"Norman Vaughan"},
{q:"Success is not final, failure is not fatal.",a:"Winston Churchill"},
{q:"Believe you can and you're halfway there.",a:"Theodore Roosevelt"},
{q:"Don't watch the clock; do what it does.",a:"Sam Levenson"},
{q:"Work hard in silence, let success make the noise.",a:"Frank Ocean"},
{q:"The secret of getting ahead is getting started.",a:"Mark Twain"},
{q:"Everything you can imagine is real.",a:"Pablo Picasso"},
{q:"Do what you can, with what you have, where you are.",a:"T. Roosevelt"},
{q:"Dream it. Wish it. Do it.",a:"Unknown"},
{q:"Success doesn’t just find you.",a:"Unknown"},
{q:"The harder you work, the luckier you get.",a:"Gary Player"},
{q:"Push yourself, because no one else will.",a:"Unknown"},
{q:"Great things never come from comfort zones.",a:"Unknown"},
{q:"Dream bigger. Do bigger.",a:"Unknown"},
{q:"Don’t stop when you’re tired.",a:"Unknown"},
{q:"Wake up with determination.",a:"Unknown"},
{q:"Do something today your future self will thank you for.",a:"Unknown"},
{q:"Little things make big days.",a:"Unknown"},
{q:"It’s going to be hard, but hard does not mean impossible.",a:"Unknown"},
{q:"Don’t wait for opportunity. Create it.",a:"Unknown"},
{q:"Sometimes later becomes never.",a:"Unknown"},
{q:"Success is what comes after failure.",a:"Unknown"},
{q:"The only limit is your mind.",a:"Unknown"},
{q:"Believe in yourself.",a:"Unknown"},
{q:"Stay positive, work hard.",a:"Unknown"},
{q:"Your limitation—it’s only your imagination.",a:"Unknown"},
{q:"Sometimes we’re tested not to show weaknesses.",a:"Unknown"},
{q:"The key to success is focus.",a:"Unknown"},
{q:"If it doesn’t challenge you, it won’t change you.",a:"Unknown"},
{q:"Don’t quit.",a:"Unknown"},
{q:"Small progress is still progress.",a:"Unknown"},
{q:"The struggle you’re in today is developing strength.",a:"Unknown"},
{q:"No pressure, no diamonds.",a:"Thomas Carlyle"},
{q:"Everything has beauty, but not everyone sees it.",a:"Confucius"},
{q:"Do what is right, not what is easy.",a:"Unknown"},
{q:"If you can dream it, you can do it.",a:"Walt Disney"},
{q:"Doubt kills more dreams than failure.",a:"Unknown"},
{q:"The way to get started is to quit talking and begin doing.",a:"Walt Disney"},
{q:"Act as if what you do makes a difference.",a:"William James"},
{q:"Success usually comes to those too busy to look for it.",a:"Henry Thoreau"},
{q:"Opportunities don't happen, you create them.",a:"Chris Grosser"},
{q:"The road to success is always under construction.",a:"Lily Tomlin"},
{q:"You miss 100% of the shots you don’t take.",a:"Wayne Gretzky"},
{q:"Your time is limited, so don’t waste it.",a:"Steve Jobs"},
{q:"Stay hungry, stay foolish.",a:"Steve Jobs"},
{q:"Creativity is intelligence having fun.",a:"Albert Einstein"},
{q:"Do one thing every day that scares you.",a:"Eleanor Roosevelt"},
{q:"Happiness is not by chance, but by choice.",a:"Jim Rohn"},
{q:"Success is walking from failure to failure.",a:"Churchill"},
{q:"Don’t count the days, make the days count.",a:"Ali"},
{q:"Strive for progress, not perfection.",a:"Unknown"},
{q:"Make each day your masterpiece.",a:"John Wooden"},
{q:"Never regret anything that made you smile.",a:"Mark Twain"},
{q:"Believe and act as if it were impossible to fail.",a:"Charles Kettering"},
{q:"The power of imagination makes us infinite.",a:"John Muir"},
{q:"It always seems impossible until it’s done.",a:"Nelson Mandela"},
{q:"The only way to do great work is to love what you do.",a:"Steve Jobs"},
{q:"Quality is not an act, it is a habit.",a:"Aristotle"},
{q:"If opportunity doesn’t knock, build a door.",a:"Milton Berle"},
{q:"Don't be busy, be productive.",a:"Unknown"},
{q:"Do what you love.",a:"Unknown"},
{q:"Think different.",a:"Apple"},
{q:"Coding is poetry.",a:"Unknown"},
{q:"Code never lies, comments sometimes do.",a:"Unknown"},
{q:"Fix the cause, not the symptom.",a:"Unknown"},
{q:"Good code is its own best documentation.",a:"Steve McConnell"},
{q:"Clean code always looks like it was written by someone who cares.",a:"Unknown"},
{q:"The best error message is the one that never shows up.",a:"Unknown"}
];

// Quote Index
let index = 0;

// Show Quote
function showQuote() {
  document.getElementById("quote").innerText = quotes[index].q;
  document.getElementById("author").innerText = "- " + quotes[index].a;

  // Hide Previous Button on First Quote
  let prevBtn = document.getElementById("prevBtn");
  prevBtn.style.display = (index === 0) ? "none" : "block";
}

// Next Quote
function newQuote() {
  index = (index + 1) % quotes.length;
  showQuote();
}

// Previous Quote
function prevQuote() {
  index = (index - 1 + quotes.length) % quotes.length;
  showQuote();
}

// Copy Quote
function copyQuote() {
  let text = `"${quotes[index].q}" — ${quotes[index].a}`;
  navigator.clipboard.writeText(text);
  alert("Quote Copied!");
}

// Dark / Light Mode
function toggleMode() {
  document.body.classList.toggle("light");
}

// Load First Quote
showQuote();
