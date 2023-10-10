import ContextMainMenuButtons from "../components/ContextMainMenuButtons";
import MainPageStore from "../stores/MainPageStore"
import ActionPage from "../components/ActionPage";
import RequestService from "../services/api.request";
import { ActionPagesEnum } from "../components/ActionPagesEnum";

import '../css/main_page.css'
import { observable } from "mobx";

const MainPage = () => {
    function onBooksClick () {
        MainPageStore.setContextMenuState("books");
        MainPageStore.setActionPage(ActionPagesEnum.allBooks);
    }

    return (
    <>
        <div className="context-menu-holder">
            <div className="buttons-holder-main">
                <button className="button-select" type="button" onClick={() => onBooksClick() }>Книги</button>
                <button className="button-select" type="button" onClick={() => MainPageStore.setContextMenuState("readers")}>Пользователи</button>
                <button className="button-select" type="button" onClick={() => RequestService.getAllBooks().then((res) => MainPageStore.setBooks(res.data))}>Обновить</button>
            </div>
            <ContextMainMenuButtons />
            <ActionPage />
        </div>
    </>)
}

export default MainPage