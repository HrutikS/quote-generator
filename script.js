
const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getRandomQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getRandomQuote(api_url);

function tweet() {

    var tweetText = '"' + quote.innerHTML + '"\n- ' + author.innerHTML;

    window.open("https://twitter.com/intent/tweet?text=" 
    + encodeURIComponent(tweetText),
    "Tweet Window", 
    "width=600, height=500");
}