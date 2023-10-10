import MainPageStore from "../stores/MainPageStore"
import { ActionPagesEnum } from "./ActionPagesEnum"
import ShowBooks from "./ActionPages/ShowBooks";
import { observer } from "mobx-react-lite";
import AddBook from "./ActionPages/AddBook";

const ActionPage = () => {

    switch (MainPageStore.ActionPage) {
        case ActionPagesEnum.allBooks: return (<ShowBooks books={MainPageStore.getBooks()}/>);
        case ActionPagesEnum.addBook: return (<AddBook/>);
        default: return(<h1>{MainPageStore.ActionPage}</h1>);
    }
}

export default observer(ActionPage)