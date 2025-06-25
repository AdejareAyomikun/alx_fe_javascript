 const quotes = [
      { text: "The best way to predict the future is to invent it.", category: "inspiration" },
      { text: "Do not be afraid to give up the good to go for the great.", category: "motivation" },
      { text: "You miss 100% of the shots you don't take.", category: "sports" }
    ];

    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuote');
    const addQuoteButton = document.getElementById('addQuoteBtn');

    function showRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      quoteDisplay.innerHTML = `"${quote.text}" — <strong>[${quote.category}]</strong>`;
    }

    function addQuote() {
      const textInput = document.getElementById('newQuoteText');
      const categoryInput = document.getElementById('newQuoteCategory');

      const newQuote = textInput.value.trim();
      const newCategory = categoryInput.value.trim();

      if (newQuote && newCategory) {
        quotes.push({ text: newQuote, category: newCategory });
        textInput.value = '';
        categoryInput.value = '';
        alert('Quote added successfully!');
      } else {
        alert('Please fill in both fields.');
      }
    }

    newQuoteButton.addEventListener('click', showRandomQuote);
    addQuoteButton.addEventListener('click', addQuote);