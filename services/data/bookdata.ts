export type Book = {
  id: string;
  title: string;
  author: string;
  avgRating: number;
  genres?: string[];
  img?: string;
};
const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    avgRating: 3.9,
    genres: ["fiction", "classics"],
    img: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "2",
    title: "The Bell Jar",
    author: "Sylvia Plath",
    avgRating: 4.2,
    genres: ["fiction", "classics", "memoir"],
    img: "https://covers.openlibrary.org/b/id/8457807-L.jpg",
  },
  {
    id: "3",
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    avgRating: 3.9,
    genres: ["fiction", "classics"],
    img: "https://m.media-amazon.com/images/I/51fPvNOoA-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "4",
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    avgRating: 4.2,
    genres: ["fiction", "classics", "memoir"],
    img: "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "5",
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    avgRating: 3.9,
    genres: ["fiction", "classics"],
    img: "https://m.media-amazon.com/images/I/71IWwBoDNsL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "6",
    title: "Beloved",
    author: "Toni Morrison",
    avgRating: 4.2,
    genres: ["fiction", "classics", "memoir"],
    img: "https://covers.openlibrary.org/b/id/9317289-L.jpg",
  },
  {
    id: "7",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    avgRating: 3.9,
    genres: ["fiction", "classics"],
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
  },
  {
    id: "8",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    avgRating: 4.2,
    genres: ["fiction", "classics", "memoir"],
    img: "https://m.media-amazon.com/images/I/61fgOuZfBGL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "9",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    avgRating: 3.9,
    genres: ["fiction", "classics"],
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
  },
  {
    id: "10",
    title: "Anna Kerenina",
    author: "Leo Tolstoy",
    avgRating: 4.2,
    genres: ["fiction", "classics", "memoir"],
    img: "https://images.penguinrandomhouse.com/cover/9780679783305",
  },
];

export { books };
