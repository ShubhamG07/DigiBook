import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "../styles.css";
import Book from "./Book";

function BrowseBook() {
  const books=useSelector((state)=>state.book.books);
  const data = useParams();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [filterOn, setFilterOn] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const [noBooksMessage, setNoBooksMessage] = useState("");

  // function for Input search books by author or title

  const handleSearch = (e) => {
    const searchValue = e.target.value;

    if (searchValue.trim() === "") {
      if (data.category) {
        const filterBook = books.filter(
          (book) => book.category === data.category
        );
        setFilteredBooks(filterBook);
      } else {
        setFilteredBooks(books); // Show all books if no category
      }
      setNoBooksMessage("");
    } else {
      let filtered;

      if (data.category) {
        let categorybooks = books.filter(
          (book) => book.category == data.category
        );
        filtered = categorybooks.filter(
          (book) =>
            book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            book.author.toLowerCase().includes(searchValue.toLowerCase())
        );
      } else {
        filtered = books.filter(
          (book) =>
            book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            book.author.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
      // Filter books based on search input

      if (filtered.length === 0) {
        // If no books match, show the "no books available" message
        setNoBooksMessage("Please enter a valid book name or author name.");
        setFilteredBooks([]);
      } else {
        // If there are matching books, update the filteredBooks
        setFilteredBooks(filtered);
        setNoBooksMessage(""); // Reset the message if there are results
      }
    }
  };

//   filter books accoring to filter selected 

  function handleFilter(id) {
    setFilterOn(true);
    setActiveButton(id);
    const filterBook = books.filter((book) => book.category === data.category);
    setFilteredBooks(filterBook);
    setNoBooksMessage("");
  }

  function handleClearFilter() {
    setFilteredBooks(books);
    setFilterOn(false);
    setActiveButton(null);
    navigate("/browsebook");
  }

  useEffect(() => {
    if (data.category) {
      const filterBook = books.filter(
        (book) => book.category === data.category
      );
      setFilteredBooks(filterBook);
      setFilterOn(true);
    } else {
      setFilteredBooks(books); // If no category in URL, show all books
      setFilterOn(false);
    }
  }, [data.category]);

  return (
    <>
      <h2 className="welcomemsg">Browse All Books Here...</h2>
      <input
        type="text"
        onChange={handleSearch}
        className="searchbook"
        placeholder="search books by title or author"
      />
      <h3 className="categories">Book Categories :</h3>
      <div className="categorybutton">
        <Link to="/books/Fiction">
          <button
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleFilter(1)}
          >
            Fiction
          </button>{" "}
        </Link>
        <Link to="/books/Thriller">
          {" "}
          <button
            className={activeButton === 2 ? "active" : ""}
            onClick={() => handleFilter(2)}
          >
            Thriller
          </button>{" "}
        </Link>
        <Link to="/books/Non-fiction">
          {" "}
          <button
            className={activeButton === 3 ? "active" : ""}
            onClick={() => handleFilter(3)}
          >
            Non-fiction
          </button>
        </Link>
        <Link to="/books/Self-help">
          <button
            className={activeButton === 4 ? "active" : ""}
            onClick={() => handleFilter(4)}
          >
            Self-help
          </button>{" "}
        </Link>
        <Link to="/books/Mystery">
          <button
            className={activeButton === 5 ? "active" : ""}
            onClick={() => handleFilter(5)}
          >
            Mystery
          </button>{" "}
        </Link>
        <Link to="/books/Crime">
          {" "}
          <button
            className={activeButton === 6 ? "active" : ""}
            onClick={() => handleFilter(6)}
          >
            Crime
          </button>
        </Link>
        <Link to="/books/History">
          {" "}
          <button
            className={activeButton === 7 ? "active" : ""}
            onClick={() => handleFilter(7)}
          >
            History
          </button>
        </Link>
        <Link to="/books/Literary Fiction">
          <button
            className={activeButton === 8 ? "active" : ""}
            onClick={() => handleFilter(8)}
          >
            Literary Fiction
          </button>{" "}
        </Link>
        <Link to="/books/Classics">
          <button
            className={activeButton === 9 ? "active" : ""}
            onClick={() => handleFilter(9)}
          >
            Classics
          </button>{" "}
        </Link>
        <Link to="/books/Fantasy">
          <button
            className={activeButton === 10 ? "active" : ""}
            onClick={() => handleFilter(10)}
          >
            Fantasy
          </button>{" "}
        </Link>
      </div>
      <button
        id="clearfilter"
        onClick={handleClearFilter}
        className={`clearfilter ${filterOn ? "" : "hide"}`}
      >
        Clear Filter{" "}
      </button>
      <div className="bookContainer">
        {filteredBooks.map((book) => (
          <Book key={book.id} data={book} />
        ))}

        {
          noBooksMessage && <p className="errorbook">{noBooksMessage}</p> // Display the 'no books' message
        }
      </div>
    </>
  );
}

export default BrowseBook;
