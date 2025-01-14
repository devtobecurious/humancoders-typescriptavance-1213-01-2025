import Item from "./item";

export class Potion<T extends object> extends Item<T>   {
    // id: number
    // label: string
    // value: number

    constructor(public id: number, public label: string, public value: number) {
        super()
    }
}