import React, { useState } from 'react';
import "./style.css";

// class SearchResults extends Component {

const SearchResults = (props) => {
  const {
    handleSaveBook, result
  } = props;

  const [isDisabled, setDisabled] = useState(false)

  const clickHandler = async (event) => {
    await handleSaveBook(event.target.dataset)
    setDisabled(true);
  }
  const noImage = "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";

  return (
    <>
      <li
        className="list-group-item collection">
        <a href={result.volumeInfo.previewLink} target="_blank" >
          <button type="submit" className="btn btn-info mr-2 float-right">
            View
        </button>
        </a>
        <button type="submit"
          disabled={isDisabled}
          onClick={clickHandler}
          className="btn btn-info mr-2 float-right"
          data-author={result.volumeInfo.authors || "Anonymous"}
          data-title={result.volumeInfo.title || "Anonymous"}
          data-synopsis={result.volumeInfo.description || "Anonymous"}
          data-view={result.volumeInfo.previewLink}
          data-buy={result.saleInfo.buyLink || "https://play.google.com/store/books"}
          data-info={result.volumeInfo.infoLink || "https://play.google.com/store/books"}
          data-img={(result.volumeInfo.imageLinks) ? result.volumeInfo.imageLinks.smallThumbnail : noImage}
        >
          Save
        </button>

        <a href={result.saleInfo.buyLink|| "https://play.google.com/store/books"} target="_blank" >
          <button type="submit" className="btn btn-info mr-2 float-right">
            Buy
        </button>
        </a>
        <a href={result.volumeInfo.infoLink|| "https://play.google.com/store/books"}>
          <img alt="Book"
            src={(result.volumeInfo.imageLinks) ? result.volumeInfo.imageLinks.smallThumbnail : noImage}
            className="img-fluid rounded float-left mr-2" />
        </a>

        <p > <strong><i>{result.volumeInfo.title || "Anonymous"}
          {result.volumeInfo.authors || "Anonymous"}  </i> </strong></p>
        <p>{result.volumeInfo.description || "Anonymous"}</p>
      </li>
    </>
  )
}
export default SearchResults;
