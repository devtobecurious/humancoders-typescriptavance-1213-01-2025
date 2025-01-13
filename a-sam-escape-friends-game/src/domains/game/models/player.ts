import Game, { Games } from "./game";
import { Pass, Vip } from "./vip";

export class Player implements Vip<Pass> {
    private games: Games = []
    
    beginGame(): void {
        const game = new Game(new Date())
        this.games.push(game)
    }

    accessVip(): void {
        console.info('Vip mod', this.pass)
    }

    get pass(): Pass {
        return {
            code: '1245XS'
        }
    }

    get isReady(): boolean {
        return this.pass.code !== ''
    }
}