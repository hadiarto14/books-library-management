import { Book } from "./book";

export interface Borrowing {
    id:number,
    name:string,
    phone:string,
    borrow_date: Date,
    return_date: Date,
    book:Book
}
