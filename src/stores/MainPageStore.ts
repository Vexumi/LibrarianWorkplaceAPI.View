import { makeAutoObservable } from "mobx";
import { ActionPagesEnum } from "../components/ActionPagesEnum";
import { BookModel } from "../Models/BookModel";

class MainPageStore {
    ContextMenuState = "";
    ActionPage: ActionPagesEnum | null = null;
    Books: BookModel[] = [];
    LibraryName: string = "Default Library Name";
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
      }

    setContextMenuState(newState: string){
        this.ContextMenuState = newState;
        console.log(this.ContextMenuState);
    }

    setActionPage(newActionPage: ActionPagesEnum){
        this.ActionPage = newActionPage;
        console.log(this.ActionPage);
    }

    setBooks(books: BookModel[]){
        this.Books = books
        console.log(books)
    }

    getBooks(){
        return this.Books;
    }
}

export default new MainPageStore()