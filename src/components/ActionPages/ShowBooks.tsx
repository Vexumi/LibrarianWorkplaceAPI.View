import { observer } from "mobx-react-lite";
import { BookModel } from "../../Models/BookModel";
import MainPageStore from "../../stores/MainPageStore";
import { Book } from "../Small Parts/Book";

const ShowBooks = (props: any) => {
    if (MainPageStore.getBooks().length == 0) return (<div>Книг нет</div>)

    return (
        <>
            <div className="books-wrapper">
                <div className="book">
                    <div className="book-property">Артикул</div>
                    <div className="book-property">Название</div>
                    <div className="book-property">Автор</div>
                    <div className="book-property">Копии</div>
                    <div className="book-property">Быстрые действия</div>
                </div>
                { props.books.map((el: BookModel) => <Book content={el} key={el.VendorCode}/>) }
            </div>
        </>
    )
}

export default ShowBooks