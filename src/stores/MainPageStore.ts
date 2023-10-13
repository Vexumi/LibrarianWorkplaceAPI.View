import { makeAutoObservable } from "mobx";
import { ActionPagesEnum } from "../components/Small Parts/ActionPagesEnum";
import { BookModel } from "../Models/BookModel";
import RequestService from "../services/api.request";

class MainPageStore {
    ContextMenuState = "";
    ActionPage: ActionPagesEnum | null = null;
    LibraryName: string = "Default Library Name";
    
    Books: BookModel[] = [];
    AvailableBooks: BookModel[] = [];
    GivedBooks: BookModel[] = [];

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
        console.log("all books:", books)
    }

    setAvailableBooks(Avbooks: BookModel[]){
        this.AvailableBooks = Avbooks;
        console.log("available books:", Avbooks);
    }

    setGivedBooks(GBooks: BookModel[]){
        this.GivedBooks = GBooks;
        console.log("gived books:", GBooks);
    }

    getBooks(){
        return this.Books;
    }
    
    getAvailableBooks(){
        return this.AvailableBooks;
    }

    getGivedBooks(){
        return this.GivedBooks;
    }

    update(){
        switch (this.ActionPage){
            case ActionPagesEnum.allBooks: RequestService.getAllBooks().then((res) => this.setBooks(res.data));
            case ActionPagesEnum.availableBooks: RequestService.getAvailableBooks().then((res) => this.setAvailableBooks(res.data));
            case ActionPagesEnum.givedBooks: RequestService.getGivedBooks().then((res) => this.setGivedBooks(res.data));
        }
        console.log("updated: ", this.ActionPage);
    }

}

export default new MainPageStore()