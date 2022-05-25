import FavCard from "./FavCard"
import { books } from "../datas/books"
import { login } from "../datas/login"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function FavContent() {
    const logged = useSelector((state) => state.logged);
    const counter = useSelector((state) => state.counter)

    const index = login.findIndex((object) => {
        return object.username === logged;
      });

    if(counter!== 0){
        return (
            <div className="conatiner">
                <div className="alert alert-info mt-4 container fw-bold" role="alert">
                    To remove from favourites list, Please click the close button for the book you want to remove. 
                    To add more <Link to="/user/dashboard"><span>Go to Dashboard</span></Link>
                </div>
            <div className="container">
              <div className="d-flex flex-wrap p-2 bd-highlight my-5">
                {books.map((book) => (
                  <FavCard key={book.id} book={book} login={login} index={index}/>
                ))}
              </div>
            </div>
            </div>
            
          )
    }

    if(counter===0)
        return(
            <div className="alert alert-info mt-4 container" role="alert">
                <h4 className="alert-heading text-dark">Sorry! :(</h4>
                    <p className="text-dark">Aww Snap! Looks like you dont have any favourites added yet. Click on the link below to redircet to dashboard and add favourite books to read</p>
      
                    <Link className="text-dark fs-5 text-decoration-none" to="/user/dashboard">Click here Navigate to Dashboard</Link>
            </div>
        )
  
    

    
}

export default FavContent
