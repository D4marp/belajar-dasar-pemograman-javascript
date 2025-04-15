const books = {};

function getBooks() {
  return books;
}

function getBookById(id) {
  // Variabel book menggunakan const karena tidak ada modifikasi.
  const book = books[id];

  if (!book) {
    return null;
  }

  return book.id;
}

function saveBook(book) {
  books[book.id] = book;
}

saveBook({ id: "book-1", name: "Book 1" });
// Variabel myBooks menggunakan const karena tidak ada modifikasi.
const myBooks = getBooks();

// Variabel myBook menggunakan const karena tidak ada modifikasi.
const myBook = getBookById("book-1");

console.log(myBooks);
console.log(myBook);