import Login from "./Login";
import Header from "./Header";
import Footer from "../Footer"

function Homepage() {
  return (
    <>
      <Header />
      <div>
        <Login />
      </div>
      <Footer/>
    </>
  );
}

export default Homepage;
