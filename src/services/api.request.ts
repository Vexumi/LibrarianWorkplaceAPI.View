import { BookPushModel } from "../Models/BookPushModel.ts";
import { instance } from "./api.config.js";

const RequestService = {
    getAllBooks() {
        return instance.get("/books");
    },

    addBook(bookPushModel: BookPushModel){
        return instance.post("/books", bookPushModel);
    },

    getAvailableBooks(){
        return instance.get("/books/available");
    },
}

export default RequestService