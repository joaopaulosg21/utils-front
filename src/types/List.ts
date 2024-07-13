import { Item } from "./Item"
import { User } from "./User"

export type ListData = {
    id:number,
    name:string,
    items:Item[],
    user:User
}