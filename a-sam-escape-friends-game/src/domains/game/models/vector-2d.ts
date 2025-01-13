
export default class Vector2D {
    x = 0
    y = 0

    // "{1, 2}"

    // Quels constructors je veux montrer au dev qui va utiliser ma classe
    // aka: quels paramètres différents (nombre et/ou typage)
    constructor()
    constructor(vector: Vector2D)
    constructor(x: number, y: number)
    constructor(coord: string)

    constructor(xOrCoord ?: number | string | Vector2D, y = 0) {
        this.y = y

        if(xOrCoord) {
            if(typeof xOrCoord === 'number') { //type guard
                this.x = xOrCoord
            } else {
                if(typeof xOrCoord === 'string') {
                    // ... parse string
                    this.x = +xOrCoord.replace('{', '').substring(0, 1) // to be continued .. :D
                } else {
                    this.x = xOrCoord.x
                    this.y = xOrCoord.y
                }
            }
        }
    }
    // constructor(x: number, y: number) {
    //     this.x = x
    //     this.y = y
    // }
}