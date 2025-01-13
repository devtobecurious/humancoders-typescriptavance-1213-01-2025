import Vector2D from "./vector-2d"

export default class MainCharacter {
    surname: string
    position = new Vector2D()

    constructor(surname: string) {
        this.surname = surname
    }

    move(): void {

    }
}