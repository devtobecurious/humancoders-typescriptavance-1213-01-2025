/**
 * Game
 */
export default class Game {
    private _finish = false

    constructor(private _beginDate: Date) {}

    start(): void {
        console.info('start')
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