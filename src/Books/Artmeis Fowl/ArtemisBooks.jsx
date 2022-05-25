import Card from "../Card";
import { books } from "../../datas/books";

function ArtemisBooks() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap p-2 bd-highlight my-5">
        {books.map((book) => (
          <Card key={book.id} book={book} genre={"AF"} />
        ))}
      </div>
    </div>
  )
}

export default ArtemisBooks