import { Borrowing } from "./borrowing";

export interface ReturnBook {
    id:number,
    return_date_actual:Date,
    borrowing:Borrowing
}
