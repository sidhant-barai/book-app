import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ logged, counter }) {
  const [alert, setAlert] = useState(true);
  // const counter = useSelector((state) => state.counter)
  // const logged = useSelector((state)=>state.logged)
  
  // console.log(counter)

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
      {alert && (
        <div>
        <div className="alert alert-success d-flex align-items-center mt-4" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
          </svg>
          <div>
              Congratulations! {logged} you have logged in successfully.
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Header;
