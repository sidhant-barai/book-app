import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from "./homepage/Homepage"
import Register from './register/Register'
import MainPage from './Books/MainPage'
import FavMain from './Favouries/FavMain'


function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<Homepage />} path='/' />
        <Route element = {<Register />} path='/user/register' />
        <Route element = {<MainPage />} path='/user/dashboard' />
        <Route element = {<FavMain />} path ='/user/favourites' />
      </Routes>
    </Router>
  );
}

export default App;
