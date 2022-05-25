import { Link } from "react-router-dom";

function Header() {
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
            className="text-light fs-5 text-decoration-none"
            to="/user/register"
          >
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
