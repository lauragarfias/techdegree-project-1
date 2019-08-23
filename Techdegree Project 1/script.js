/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

//Array of quotes with source, citation & year if available
var quotes = [
  {quote: 'An arrow can only be shot by pulling it backward. When life is dragging you back with difficulties, it means it’s going to launch you into something great. So just focus, and keep aiming.', 
    source: 'Anonymous'},
  {quote: 'May the Force by with you', 
    source: 'Han Solo', 
    citation: 'Star Wars', 
    year: '1977'},
  {quote: 'The greatest wealth is to live content with little.', 
    source: 'Plato'},
  {quote: 'It does not matter how slowly you go so long as you do not stop.', 
    source: 'Confucius'},
  {quote: 'Love means never having to say you\'re sorry', 
  source: "Ryan O'Neal", 
  citation: 'Love Story', 
  year: '1970'}
]

console.log(quotes);

//Generate a random quote
function getRandomQuote() {
 var randomNumber = Math.floor(Math.random()*5);
 var randomQuote = quotes[randomNumber];
 return randomQuote;
}

console.log(getRandomQuote());

//Print out the quote, source, citation and year
function printQuote() {
  var html = ''
  var quote = getRandomQuote();
  html += '<p class="quote">' + quote['quote'] + '</p>';
  html += '<p class="source">' + quote['source'];
  if(quote.citation) {
    html += '<span class="citation">' + quote['citation'] + '</span>';
  }
  if(quote.year) {
    html += '<span class="year">' + quote['year'] + '</span>';
  }
  html += '</p>';
  function print() {
    var quoteBoxDiv = document.getElementById('quote-box');
    quoteBoxDiv.innerHTML = html;
  }

  return print();
}
//return a new quote when button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
