import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    saveValue: false,
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

  saveBook=({target}) => {  
    this.setState({
      saveValue:!this.state.saveValue})
    const{author,synopsis,title,view,info,buy,img} =target.dataset;
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
    console.log('this.saveBtn',this.state.saveValue)
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Book Name or Author Name!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults results={this.state.results} 
          handleSaveBook={this.saveBook}
          saveBtnValue={this.state.saveValue}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
