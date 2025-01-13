import Character from "./character";
import { Direction } from "./custom-types";

export default class Enemy extends Character {
    protected doUpdatePosition(direction: Direction): void {
        if(direction === 'West') {
            this.position.x += 1
        }
    }
}