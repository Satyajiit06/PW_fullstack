// List of books with title, author, and publication year
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
    { title: "Becoming", author: "Michelle Obama", year: 2018 },
    { title: "The Girl on the Train", author: "Paula Hawkins", year: 2015 }
  ];
  
  // Function to capitalize the author's name
  function capitalizeAuthorName(author) {
    return author.toUpperCase();
  }
  
  // Filter and capitalize
  const filteredBooks = books
    .filter(book => book.year > 2010) // Keep books published after 2010
    .map(book => ({
      title: book.title,
      author: capitalizeAuthorName(book.author), // Capitalize author's name
      year: book.year
    }));
  
  console.log(filteredBooks);
  