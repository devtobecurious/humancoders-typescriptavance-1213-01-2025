import { log } from "../../../core/decorators/logger"
import { Displayer } from "../../../core/displayers/displayer"
import Character, { converterPosition } from "./character"
import { Direction } from "./custom-types"


export default class MainCharacter extends Character {
    constructor(surname: string, 
                private nbLunch: number, 
                private displayer: Displayer<MainCharacter>) {
        super(surname)
        if (this.nbLunch < 0) {
            this.nbLunch = 8
        }

    }
    
    @log('development')
    init(): void {
        this.displayer.init(this)
    }    

    @log('production', 'warning')
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