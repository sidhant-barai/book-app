import Card from "../Card";
import { books } from "../../datas/books";

function LorBook() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap p-2 bd-highlight my-5">
        {books.map((book) => (
          <Card key={book.id} book={book} genre={"LOR"} />
        ))}
      </div>
    </div>
  );
}

export default LorBook;
