import { Potion } from "./potion";
import { Shield } from "./shield";

type InventoryContext<Data extends object> = Potion<Data> | Shield<Data>

type Wall = {
    id: number,
    height: number
}
type WithId = Pick<Wall, 'id'>
type WithIdItem<Data extends object> = InventoryContext<Data> & WithId

export class Inventory<Data extends object, Item extends WithIdItem<Data>> {
    items: Item[] = []

    add(item: Item): void {
        this.items.push(item)
    }

    remove(searchItem: Item): void {
        this.items = [ ...this.items.filter(item => item.id !== searchItem.id) ]
    }
}