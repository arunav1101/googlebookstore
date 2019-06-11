import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SavedResults from "../components/SavedResults";
import Alert from "../components/Alert";

class Saved extends Component {
  state = {
    books:[],
  };

   componentDidMount() {
      this.loadBooks();
    }
  
     loadBooks = () => {
      API.getBooks()
        .then(res =>{
          console.log('api',res.data)
          this.setState({ books: res.data })
        }
        )
        .catch(err => console.log(err));
    };

  deleteBook = ({target}) => {
const {dataset} =target;
    // console.log('delete',dataset.id)
    API.deleteBook(dataset.id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        {this.state.books.length ? (
          <SavedResults results={this.state.books} 
          handleDelete={this.deleteBook}
          />
        ):(
          <h3>No Results to Display</h3>
        )}
        </Container>
      </div>
    );
  }
}

export default Saved;
