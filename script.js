// Get Quotes From API

async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        console.log(response);
    } catch (error) {
        console.log(`There is no fetching this URL: ${apiUrl}. Error:${error}`);
    }
}

getQuotes();