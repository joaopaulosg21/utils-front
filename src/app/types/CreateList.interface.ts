import { Item } from "./Item.interface";

export interface CreateList {
    name:string,
    items:Item[],
    isPublic:boolean
}