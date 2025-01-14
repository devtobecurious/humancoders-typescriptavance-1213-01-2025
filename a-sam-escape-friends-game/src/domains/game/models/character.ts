import { Direction } from "./custom-types"
import Vector2D from "./vector-2d"

// il est singleton, si appelé quelque part ...
export const converterPosition: Record<Direction, Vector2D> = {
    'East': new Vector2D(1, 0),
    'West': new Vector2D(-1, 0),
    'North': new Vector2D(0, -1),
    'South': new Vector2D(0, 1),
}

/**
 * 
 */
export default abstract class Character {
    position = new Vector2D()

    // @required()
    surname: string

    constructor(surname: string) {
        this.surname = surname
    }

    move(direction: Direction): void {
        //const vector = new Vector2D()
        // switch(direction) {
        //     case 'East': {
        //         vector.x = 1
        //     }; break;
        //     case 'West': {
        //         vector.x = -1
        //     }; break;
        // }
        const nextVector = converterPosition[direction]
        this.position.x += nextVector.x
        this.position.y += nextVector.y

        this.doUpdatePosition(direction)
    }

    /**
     * demande une mise à jour de la position, suivant les cas décidés par l'enfant
     * @param direction 
     */
    protected abstract doUpdatePosition(direction: Direction): void 
}