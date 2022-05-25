import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decrement } from "../redux/actions";

function FavCard({book, login, index}) {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const counter = useSelector((state)=>state.counter)

    const deleteHandler = (value) => {
        const del = login[index].favourites.indexOf(value);
        if (del > -1) {
        login[index].favourites.splice(del, 1);
        navigate("/user/favourites");
        dispatch(decrement())
     }
     console.log(login[index].favourites)
    }
 
    if(login[index].favourites.includes(book.id)){
        return(
        <div className="px-3 py-3">
            <button type="button" class="btn-close" aria-label="Close" onClick={()=>deleteHandler(book.id)}></button>
        <div className="card shadow" style={{ width: "18rem" }}>
          <img src={book.image} className="card-img-top" alt="book-logo" />
          <div className="card-body">
            <h5 className="card-title fw-bold fs-4">{book.title}</h5>
            <p className="card-text fs-5">{book.author}</p>
            <p className="card-text">Rating: {book.rating}</p>
          </div>
        </div>
      </div>
        )
        
    }
    
   
    
}

export default FavCard