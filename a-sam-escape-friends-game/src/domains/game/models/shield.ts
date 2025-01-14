import Item from "./item";

export class Shield<T extends object> extends Item<T> {
    // id: number
    // label: string
    // value: number

    constructor(public id: number, public version: number) {
        super()
    }
}