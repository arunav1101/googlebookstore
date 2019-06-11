import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  googleApi: function (title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
