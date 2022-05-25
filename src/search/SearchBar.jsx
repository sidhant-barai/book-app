import { useState } from "react"
import Card from "../Books/Card"
import { books } from "../datas/books"

function SearchBar() {
    const [srch, setSrch] = useState(false)
    const [val, setVal] = useState([])
    
    const searchUpdate = (event) => {
        let value = event.target.value
        if(books.some((e)=> e.title.includes(value))){
            setSrch(true)
        } else {
            setSrch(false)
        }
    }

  return (
    <div className="container">
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Search..." onChange={searchUpdate}/>
        </div>
    </div>
  )
}

export default SearchBar
