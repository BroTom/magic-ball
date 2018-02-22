var quotes = ["Most Likely", 
"No", 
"Yes", "Don't Think about it", "Without a doubt", "That's how I see it", "Google it", "YEET" ]

function newQuote() {
    var randNum = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}

