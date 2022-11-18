import { Category } from "./category";

export interface Book {
    category_id: number;
    id:number,
    title:string,
    author: string,
    description: string,
    image: string,
    availability:boolean,
    category:Category,
    rating:number
}
