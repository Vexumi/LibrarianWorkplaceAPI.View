import { BookModel } from "../Models/BookModel"
import { BsFillTrash3Fill } from "react-icons/bs"
import { FaHammer } from "react-icons/fa"

export const Book = (props: any) => {
    const book: BookModel = props.content
    return (
        <div className="book">
            <div className="book-property">{book.VendorCode}</div>
            <div className="book-property">{book.Title}</div>
            <div className="book-property">{book.Author}</div>
            <div className="book-property">{book.NumberOfCopies}</div>
            <div className="book-property">
                <FaHammer className="edit-icon"/>
                <BsFillTrash3Fill className="delete-icon"/>
            </div>
        </div>
    )
}