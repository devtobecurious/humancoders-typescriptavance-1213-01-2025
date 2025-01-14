import Character from "./character"
import Enemy from "./enemy"
import MainCharacter from "./main-character"

/**
 * Game
 */
export default class Game {
    private _finish = false
    private mainCharacter : MainCharacter | undefined

    private characters: Character[] = [
        new MainCharacter('Sam', 10),
        new Enemy('Orq 01'),
        new Enemy('Orq 02')
    ]

    constructor(private _beginDate: Date) {}

    start(): void {
        //this.characters.forEach(item => item.move('East'))
        this.mainCharacter = this.characters.find(item => item instanceof MainCharacter)

        if(! this.mainCharacter) {
            throw new Error('Main character not found')
        }

        this.mainCharacter.init()
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