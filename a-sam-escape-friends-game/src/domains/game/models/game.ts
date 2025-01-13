import Character from "./character"
import Enemy from "./enemy"
import MainCharacter from "./main-character"

/**
 * Game
 */
export default class Game {
    private _finish = false
    private characters: Character[] = [
        new MainCharacter('Sam', 10),
        new Enemy('Orq 01'),
        new Enemy('Orq 02')
    ]

    constructor(private _beginDate: Date) {}

    start(): void {
        this.characters.forEach(item => item.move('East'))
    }

    /**
     * date de début
     */
    get beginDate() {
        return this._beginDate
    }

    private set isFinish(value: boolean) {
        this._finish = value
    }
    get isFinish() {
        return this._finish
    }
}

export type Games = Game[]