import MainPageStore from "../stores/MainPageStore"
import { ActionPagesEnum } from "./Small Parts/ActionPagesEnum"
import ShowBooks from "./ActionPages/ShowBooks";
import { observer } from "mobx-react-lite";
import AddBook from "./ActionPages/AddBook";

const ActionPage = () => {

    switch (MainPageStore.ActionPage) {
        case ActionPagesEnum.allBooks: return (<ShowBooks books={MainPageStore.getBooks()}/>);
        case ActionPagesEnum.addBook: return (<AddBook/>);
        case ActionPagesEnum.availableBooks: return (<ShowBooks books={MainPageStore.getAvailableBooks()}/>)
        default: return(<h1>{MainPageStore.ActionPage}</h1>);
    }
}

export default observer(ActionPage)