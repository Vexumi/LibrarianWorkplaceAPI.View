import { observer } from "mobx-react-lite";
import MainPageStore from "../stores/MainPageStore";
import { ActionPagesEnum as APE } from "./ActionPagesEnum";
import ButtonSelect from "./ButtonSelect";

const ContextMainMenuButtons = () => {
    if (MainPageStore.ContextMenuState === "readers") return (
        <>
            <div className="buttons-holder">
                <ButtonSelect content="Все читатели"/>
                <ButtonSelect content="Найти по ID"/>
                <ButtonSelect content="Найти по ФИО"/>
            </div>
            <div className="buttons-holder">
                <ButtonSelect content="Добавить читателя"/>
                <ButtonSelect content="Удалить читателя"/>
                <ButtonSelect content="Редактировать читателя"/>
            </div>
        </>);
    else if (MainPageStore.ContextMenuState === "books") return(
        <>
            <div className="buttons-holder">
                <ButtonSelect select={APE.addBook} content="Добавить"/>
                <ButtonSelect select={APE.availableBooks} content="Доступные для выдачи"/>
                <ButtonSelect select={APE.givedBooks} content="Список выданных книг"/>
            </div>
            <div className="buttons-holder">
                <ButtonSelect select={APE.findById} content="Найти информацию по артикулу"/>
                <ButtonSelect select={APE.findByName} content="Найти по названию"/>
            </div>
        </>);
    else return(null)
}

export default observer(ContextMainMenuButtons);