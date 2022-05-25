import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

function FavHead() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const counter=useSelector((state)=>state.counter)

  const logoutHandler = () => {
    navigate('/')
  }

  return (
    <div className="container">
    <nav className="navbar bg-dark">
      <div className="container">
        <p className="navbar-brand fs-1 text-light pb-0">
          <img
            src="https://media.istockphoto.com/vectors/planet-saturn-with-planetary-ring-system-flat-icon-vector-on-white-vector-id1144004999?k=20&m=1144004999&s=612x612&w=0&h=Z82SF-E33KmEzQiWI1jpNisWeL4DzqbcfeLpS9J0eBA="
            alt="logo"
            width="50"
            height="50"
            className="pt-0"
          />{" "}
          Dream World Books
        </p>
        <Link
          className="text-light fs-4 text-decoration-none"
          to="/user/favourites"
        >
          <button type="button" className="btn btn-outline-light fs-3">Favourites: </button> {" "} {counter}
        </Link>
        <div>
          <button type="button" className="btn btn-outline-light fs-3" onClick={logoutHandler}>Logout</button>
        </div>
      </div>
      
    </nav>
     
    </div>
  )
}

export default FavHead