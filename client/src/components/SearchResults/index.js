import React, { Component } from 'react';
import "./style.css";

function SearchResults (props){
const noImage="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";
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
        data-author={result.volumeInfo.authors || "Anonymous"  }
        data-title={result.volumeInfo.title || "Anonymous" }
        data-synopsis={result.volumeInfo.description || "Anonymous" }
        data-view={result.volumeInfo.previewLink}
        data-buy={result.saleInfo.buyLink}
        data-info={result.volumeInfo.infoLink}
        data-img={(result.volumeInfo.imageLinks)?result.volumeInfo.imageLinks.smallThumbnail :noImage}
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
          src={(result.volumeInfo.imageLinks)?result.volumeInfo.imageLinks.smallThumbnail :noImage}
          className="img-fluid rounded float-left mr-2" />
          </a>

         <p > <strong><i>{result.volumeInfo.title || "Anonymous"  } 
             {result.volumeInfo.authors || "Anonymous"  }  </i> </strong></p>
          <p>{result.volumeInfo.description  || "Anonymous" }</p>
        </li>
      ))}
    </ul>
    </div>
  );
}
// }
export default SearchResults;
