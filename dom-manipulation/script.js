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

    // function addQuote() {
    //   const textInput = document.getElementById('newQuoteText');
    //   const categoryInput = document.getElementById('newQuoteCategory');

    //   const newQuote = textInput.value.trim();
    //   const newCategory = categoryInput.value.trim();

    //   if (newQuote && newCategory) {
    //     quotes.push({ text: newQuote, category: newCategory });
    //     textInput.value = '';
    //     categoryInput.value = '';
    //     alert('Quote added successfully!');
    //   } else {
    //     alert('Please fill in both fields.');
    //   }
    // }
function createAddQuoteForm() {
  const formContainer = document.createElement('div');

  const quoteInput = document.createElement('input');
  quoteInput.id = 'newQuoteText';
  quoteInput.type = 'text';
  quoteInput.placeholder = 'Enter a new quote';

  const categoryInput = document.createElement('input');
  categoryInput.id = 'newQuoteCategory';
  categoryInput.type = 'text';
  categoryInput.placeholder = 'Enter quote category';

  const addButton = document.createElement('button');
  addButton.textContent = 'Add Quote';
  addButton.addEventListener('click', addQuote);

  formContainer.appendChild(quoteInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addButton);

  document.body.appendChild(formContainer);
}

    newQuoteButton.addEventListener('click', showRandomQuote);
    addQuoteButton.addEventListener('click', addQuote);