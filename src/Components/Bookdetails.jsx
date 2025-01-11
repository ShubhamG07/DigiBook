import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles.css";
import { Link } from "react-router-dom";

function Bookdetails() {
  const data = useParams();
  const books=useSelector((state)=>state.book.books);
  const bookdata = books.filter((book) => book.id == data.id);

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i}>{i < rating ? '★' : '☆'}</span>);
    }
    return stars;
  };

  return (
    <>
      {bookdata.map((book) => (
        <div key={book.id} className="bookdata-container">
          <div>
            <img src={book.cover_image} alt="book cover" />
          </div>
          <div className="bookdata-details">
            <h2>{book.title}</h2>
            <p><b>Author : </b>{book.author}</p>
            <p><b>Category : </b>{book.category}</p>
           
            <p><b>Description : </b>{book.description}</p>
            <p><b>Price : </b>{book.price}$</p>
            <p><b>Rating : </b>{renderRating(book.rating)}</p>
            <Link to="/browsebook"><button className="backtobrowse">Back to Browse</button></Link>
            </div>
        </div>
      ))}
    </>
  );
}

export default Bookdetails;
