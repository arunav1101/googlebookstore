import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.googleApi(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  saveBook=({author,synopsis,title,view,info,buy,img}) => {  
    // const{} =target.dataset;

    if (title && author) {
      API.saveBook({
        title,
        author,
        synopsis,
        view,
        info,
        buy,
        img
      })
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Book Name or Author Name!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
       <div className="box container">
       <ul className="list-group search-results">
        {this.state.results.map(result => ( 
          <SearchResults key={result.id} result={result} 
          handleSaveBook={this.saveBook}
          />
        ))}
          </ul>
          </div>

        </Container>
      </div>
    );
  }
}

export default Search;
