import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadBook from "./HeadBook";
import HarryBooks from "./HarryPotter/HarryBooks";
import LorBook from "./Lord of the Rings/LorBook";
import ArtemisBooks from './Artmeis Fowl/ArtemisBooks'
import SearchBar from "../search/SearchBar";


function MainPage() {
  const navigate = useNavigate();
  const logged = useSelector((state) => state.logged);
  const counter = useSelector((state)=>state.counter) 

  const [openHP, setOpenHP] = useState(false);
  const [openLOR, setOpenLOR] = useState(false);
  const [openAF, setOpenAF] = useState(false)

  return (
    <div>
      <HeadBook logged={logged} counter={counter}/>
      <div className="container mt-4">
        <ul className="nav bg-light py-2">
          <li className="nav-item text-align-center px-3">
            <a
              href="#"
              className="text-decoration-none text-dark fs-3"
              onClick={() => {
                setOpenHP(!openHP);
                setOpenLOR(false);
                setOpenAF(false)
              }}
              aria-controls="example-collapse-text"
              aria-expanded={openHP}
            >
              Harry Potter
            </a>
          </li>
          <li className="nav-item px-3">
            <a
              href="#"
              className="text-decoration-none text-dark fs-3"
              onClick={() => {
                setOpenLOR(!openLOR);
                setOpenHP(false);
                setOpenAF(false)
              }}
              aria-controls="example-collapse-text"
              aria-expanded={openLOR}
            >
              Lord Of The Rings
            </a>
          </li>
          {/* <li className="nav-item">
            <button onClick={add}>clickme</button>
          </li> */}
         <li className="nav-item px-3">
            <a
              href="#"
              className="text-decoration-none text-dark fs-3"
              onClick={() => {
                setOpenAF(!openAF);
                setOpenHP(false);
                setOpenLOR(false)
              }}
              aria-controls="example-collapse-text"
              aria-expanded={openAF}
            >
              Artemis Fowl
            </a>
          </li>
          <li className="nav-item px-3 fs-3">
            <SearchBar />
          </li>
        </ul>
      </div>

      {openHP && (
        <div in={openHP}>
          <div id="example-collapse-text">
            <HarryBooks />
          </div>
        </div>
      )}
      {openLOR && (
        <div in={openLOR}>
          <div id="example-collapse-text">
            <LorBook />
          </div>
        </div>
      )}
      {openAF && (
        <div in={openAF}>
          <div id="example-collapse-text">
            <ArtemisBooks />
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
