import Character, { converterPosition } from "./character"
import { Direction } from "./custom-types"

type KeyPressType = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'
const keyToDirectionConverter: Record<KeyPressType, Direction> = {
    ArrowDown: 'South',
    ArrowLeft: 'West',
    ArrowRight: 'East',
    ArrowUp: 'North'
}

export type Sprite = {
    size: {
        width: number,
        height: number
    }
}
export const gridRowDirectionConverter: Record<Direction, number> = {
    East: 0,
    West: 1,
    North: 2,
    South: 3
}

export default class MainCharacter extends Character {
    private gridContainer !: HTMLDivElement
    private container !: HTMLDivElement
    private currentFrameIndex = 0
    private currentSprite: Sprite = {
        size: {
            width: 50,
            height: 50
        }
    }

    constructor(surname: string, private nbLunch: number) {
        super(surname)
        if (this.nbLunch < 0) {
            this.nbLunch = 8
        }

    }
    
    init(): void {
        this.gridContainer = document.getElementById('game-container') as HTMLDivElement
        this.container = this.gridContainer.querySelector<HTMLDivElement>('.main-character')!
        window.addEventListener('keydown', event => this.listenKeyPress(event))
    }

    private listenKeyPress(event: KeyboardEvent): void {
        const direction: Direction = keyToDirectionConverter[event.key as KeyPressType]
        this.move(direction)
    }

    move(direction: Direction): void {
        super.move(direction)
        this.moveContainer()
        this.moveSprite(direction)
    }

    private moveContainer(): void {
        this.container.style.gridColumn = (this.position.x + 1).toString()
        this.container.style.gridRow = (this.position.y + 1).toString()
    }

    private moveSprite(direction: Direction): void {
        this.currentFrameIndex = (this.currentFrameIndex + 1) % 3
        const xOffset = this.currentFrameIndex * this.currentSprite.size.width
        const yOffset = gridRowDirectionConverter[direction] * this.currentSprite.size.height

        this.container.style.backgroundPosition = `-${xOffset}px -${yOffset}px`
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