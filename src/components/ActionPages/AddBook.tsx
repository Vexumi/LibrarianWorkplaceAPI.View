import { useState } from 'react';
import '../../css/forms.css'
import FormProperty from '../Small Parts/Form-Property'
import RequestService from '../../services/api.request';
import { BookPushModel } from '../../Models/BookPushModel';
import MainPageStore from '../../stores/MainPageStore';

const AddBook = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [numberOfCopies, setNumberOfCopies] = useState(0);

    function submitClicked(){
        const book: BookPushModel = {
            Title: title,
            Author: author,
            ReleaseDate: releaseDate,
            NumberOfCopies: numberOfCopies,
            LibraryName: MainPageStore.LibraryName
        }
        //console.log(book)
        RequestService.addBook(book);
    }

    return (
    <>
    <div className="form-wrapper">
        <form>
            <div className="form-property">
                <h2>Добавление книги</h2>
            </div>

            <FormProperty label="Название" placeholder="Метро 2033" inputType="text" onChange={(e:any) => setTitle(e.target.value)}/>
            <FormProperty label="Автор" placeholder="Дмитрий Алексеевич Глуховский" inputType="text" onChange={(e:any) => setAuthor(e.target.value)}/>
            <FormProperty label="Дата выхода" inputType="date" onChange={(e:any) => setReleaseDate(e.target.value)}/>
            <FormProperty label="Количество копий" placeholder="100" inputType="number" onChange={(e:any) => setNumberOfCopies(e.target.value)}/>

            <div className="submit-button-wrapper">
                <input type="button" onClick={() => submitClicked()} value="Сохранить"/>
            </div>
        </form>
    </div>
    </>
    )
}

export default AddBook