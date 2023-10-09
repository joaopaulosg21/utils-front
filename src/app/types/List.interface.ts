import { Item } from "./Item.interface";

export interface List {
    id:string,
    name:string,
    createdAt:string,
    items: Item[],
    public:boolean
}