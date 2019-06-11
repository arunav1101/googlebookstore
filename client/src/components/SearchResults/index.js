import React, { Component } from 'react';
import "./style.css";

function SearchResults (props){
  
  return (
    <div className="box container">
   
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} 
        className="list-group-item collection">
        
         <a href={result.volumeInfo.previewLink}  target="_blank" >
         <button type="submit" className="btn btn-info mr-2 float-right">
         View
        </button>
        </a>

        <button type="submit" 
        onClick={props.handleSaveBook}
        className="btn btn-info mr-2 float-right"
        data-author={result.volumeInfo.authors}
        data-title={result.volumeInfo.title}
        data-synopsis={result.volumeInfo.description}
        data-view={result.volumeInfo.previewLink}
        data-buy={result.saleInfo.buyLink}
        data-info={result.volumeInfo.infoLink}
        data-img={result.volumeInfo.imageLinks.smallThumbnail}
        >
          Save
        </button>

        <a href={result.saleInfo.buyLink}  target="_blank" >
         <button type="submit" className="btn btn-info mr-2 float-right">
         Buy
        </button>
        </a>
          <a href={result.volumeInfo.infoLink}>
          <img alt="Book"
          src={result.volumeInfo.imageLinks.smallThumbnail}
          className="img-fluid rounded float-left mr-2" />
          </a>

         <p > <strong><i>{result.volumeInfo.title} 
             {result.volumeInfo.authors}  </i> </strong></p>
          <p>{result.volumeInfo.description}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}
// }
export default SearchResults;
