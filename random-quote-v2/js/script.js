//We create an Array that contains all the quotes.
let quotes = [
  {
    quote: "You cannot shake hands with a clenched fist.",
    source: "Indira Ghandi"
  },
  {
    quote: "There is nothing permanent except change.",
    source: "Heraclitus"
  },
  {
    quote: "There is no charm equal to tenderness of heart.",
    source: "Jane Austen"
  },
  {
    quote: "The only journey is the one within.",
    source: "Rainer Maria"
  },
  {
    quote: "It is far better to be alone, than to be in bad company.",
    source: "George Washington"
  },
  {
    quote: "Independence is happiness.",
    source: "Susan B. Anthony"
  },
  {
    quote: "You can do anything but not everything",
    source: "David Allen"
  }
];
//Creates a Random Quote(Math.Random)
function getRandomQuote()
{
  //Generates a random number and pick up a quote from the array
  var index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}
//Print the Quote on the selected fields.
function printQuote()
{
  //Pass quote and print it
  var chosenQuote = getRandomQuote();
  //Chose the quote and set up the Values
  var finalProduct ='';
  finalProduct += '<p class="quote">' + chosenQuote.quote + '</p>';
  finalProduct +=  '<p class="source">' + chosenQuote.source + '</p>';
  //Print it into the HTML
  var produceQuote = document.getElementById('quote-box').innerHTML = produceQuote;
}

// event listener to respond to "Show another quote" button clicks

document.getElementById('loadQuote').addEventListener('click', () => {
  printQuote();
});
