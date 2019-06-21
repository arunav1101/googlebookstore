import React, { Component } from 'react';
import "./style.css";

function SavedResults (props){
  console.log('from DB', props.results)
  
  return (
    <div className="box container">
   
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result._id} 
        className="list-group-item collection">
        
         <a href={result.view}  target="_blank" >
         <button type="submit" className="btn btn-info mr-2 float-right">
         view
        </button>
        </a>

        <button type="submit" 
        onClick={props.handleDelete}
        className="btn btn-info mr-2 float-right"
        data-id={result._id}
        >
          Delete
        </button>

        <a href={result.buy}  target="_blank" >
         <button type="submit" className="btn btn-info mr-2 float-right">
         Buy
        </button>
        </a>
          <a href={result.info}>
          <img alt="Book"
          src={result.img}
          className="img-fluid rounded float-left mr-2" />
          </a>

         <p > <strong><i>{result.title} 
             {result.authors}  </i> </strong></p>
          <p>{result.synopsis}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}
// }
export default SavedResults;