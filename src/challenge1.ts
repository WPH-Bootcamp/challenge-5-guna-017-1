//type for book
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

//array books
const books: Book[] = [];

//addBook function
function addBook(title: string, author: string, publicationYear: number): void {
  books.push({
    title,
    author,
    publicationYear,
  });
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

//listBook function
function listBooks(): void {
  console.log('All Books:');
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

//searchBook function
function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const searchBookResult = books.filter((book) => book.title.includes(title));

  console.log(`Search Results for "${title}":`);

  if (searchBookResult.length !== 0) {
    searchBookResult.forEach((book) => {
      console.log(
        `- ${book.title} by ${book.author} (${book.publicationYear})`
      );
    });
  } else {
    console.log(`No books found with title containing "${title}".`);
  }
}

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook('1984');

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
