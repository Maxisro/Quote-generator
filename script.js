const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQoutes = [];

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//Show New Quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from apiQuotes array
    const quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length)];
    // Check if Author field is blank and replace it
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    // Check Quote length to determinate styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }

    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Get Quotes From API
async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQoutes = await response.json();
        newQuote();
    } catch (error) {
        console.log(`There is no fetching this URL: ${apiUrl}. Error:${error}`);
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
