import Enemy from "../../domains/game/models/enemy";
import MainCharacter from "../../domains/game/models/main-character";
import { MainCharacterDisplayerInfra } from "../../infras/game/main-character.displayer";
import { Constructor } from "../custom-types";

export function WithEffect<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        effect = 0

        updateEffect(): void {
            this.effect ++
        }
    }
}

export function WithPower<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        power = 0
    }
}

export class Boss extends WithPower(WithEffect(Enemy)) {
    constructor() {
        super(`je suis un boss`)
        console.info(`${this.effect} - ${this.power}`)
    }
}

export class SuperMan extends WithPower(WithEffect(MainCharacter)) {
    constructor() {
        super('Clark', 12, new MainCharacterDisplayerInfra())
        console.info(`${this.effect} - ${this.power}`)
    }
}


// type WithEffectT = {
//     effect: 0
// }

// type WithPowerT = {
//     power: 0
// }

// type EffectAndPower = WithEffectT & WithPowerT
// export class BossT implements EffectAndPower {
//     power: 0;
//     effect: 0;

// }