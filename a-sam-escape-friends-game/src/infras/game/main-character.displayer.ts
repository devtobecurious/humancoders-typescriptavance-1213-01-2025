import { MainCharacterDisplayer } from "../../domains/game/displayers/main-character.displayer";
import { Direction } from "../../domains/game/models/custom-types";
import MainCharacter from "../../domains/game/models/main-character";

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

export class MainCharacterDisplayerInfra implements MainCharacterDisplayer {
    private mainCharacter !: MainCharacter
    private gridContainer !: HTMLDivElement
    private container !: HTMLDivElement
    private currentFrameIndex = 0
    private currentSprite: Sprite = {
        size: {
            width: 50,
            height: 50
        }
    }

    init(mainCharacter: MainCharacter): void {
        this.mainCharacter = mainCharacter

        this.gridContainer = document.getElementById('game-container') as HTMLDivElement
        this.container = this.gridContainer.querySelector<HTMLDivElement>('.main-character')!
        window.addEventListener('keydown', event => this.listenKeyPress(event))
    }

    private listenKeyPress(event: KeyboardEvent): void {
        this.currentDirection = keyToDirectionConverter[event.key as KeyPressType]
        this.mainCharacter.move(this.currentDirection)
    }

    private currentDirection: Direction | undefined

    update(): void {
        this.moveContainer()
        if(this.currentDirection) {
            this.moveSprite(this.currentDirection)
        }
    }

    private moveContainer(): void {
        this.container.style.gridColumn = (this.mainCharacter.position.x + 1).toString()
        this.container.style.gridRow = (this.mainCharacter.position.y + 1).toString()
    }

    private moveSprite(direction: Direction): void {
        this.currentFrameIndex = (this.currentFrameIndex + 1) % 3
        const xOffset = this.currentFrameIndex * this.currentSprite.size.width
        const yOffset = gridRowDirectionConverter[direction] * this.currentSprite.size.height

        this.container.style.backgroundPosition = `-${xOffset}px -${yOffset}px`
    }
}