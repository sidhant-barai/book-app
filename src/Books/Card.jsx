import { useSelector } from "react-redux";
import {login} from '../datas/login'
import {useDispatch} from 'react-redux'
import { increment } from "../redux/actions";

function Card({ book, genre }) {
  const logged = useSelector((state) => state.logged)
  

  const index = login.findIndex((object) => {
    return object.username === logged;
  });
  
  const dispatch = useDispatch()

  const favHandler = (value) => {

    if(!login[index].favourites.includes(value)){
      login[index].favourites.push(value);
      dispatch(increment())
      
    } else {
      alert("Book already added to favourites")
    }
    console.log(login[index].favourites)
   
  }

  if (book.genre === genre) {
    return (
      <div className="px-3 py-3">
        <div className="card shadow" style={{ width: "18rem" }}>
          <img src={book.image} className="card-img-top" alt="book-logo" />
          <div className="card-body">
            <h5 className="card-title fw-bold fs-4">{book.title}</h5>
            <p className="card-text fs-5">{book.author}</p>
            <p className="card-text">Rating: {book.rating}</p>
            <div className="text-center">
              <button className="btn btn-success" onClick={()=>favHandler(book.id)}>Add to Favourites</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
