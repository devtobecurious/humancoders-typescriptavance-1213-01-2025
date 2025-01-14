import { MainCharacterDisplayer } from "../displayers/main-character.displayer"
import Character, { converterPosition } from "./character"
import { Direction } from "./custom-types"


export default class MainCharacter extends Character {
    constructor(surname: string, 
                private nbLunch: number, 
                private displayer: MainCharacterDisplayer) {
        super(surname)
        if (this.nbLunch < 0) {
            this.nbLunch = 8
        }

    }
    
    init(): void {
        this.displayer.init(this)
    }    

    move(direction: Direction): void {
        super.move(direction)
        this.displayer.update()
    }    

    // move(direction: Direction): void {
    //     super.move(direction)

    //     if(direction == 'North') {
    //         this.position = { ...converterPosition.South }
    //     }
    // }

    //#region Internal methods
    protected doUpdatePosition(direction: Direction): void {
        if (direction == 'North') {
            this.position = { ...converterPosition.South }
        }
    }
    //#endregion
}