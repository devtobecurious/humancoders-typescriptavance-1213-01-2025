import { MainCharacterDisplayer } from "../domains/game/displayers/main-character.displayer";
import MainCharacter from "../domains/game/models/main-character";
import { MainCharacterDisplayerInfra } from "../infras/game/main-character.displayer";

describe('main-character', () => {
    // N tests unitaires
    // une seul fois
    beforeAll(() => {
        // attention, du statique, du singleton
    })

    let character: MainCharacter
    beforeEach(() => {
        document.body.innerHTML = `
            <div>
                <div id="game-container">
                    <div class="main-character">
                    </div>
                </div>
            </div>
        `

        // bien penser à setter les valeurs pour chaque test
        const toBeMockable: MainCharacterDisplayer = new MainCharacterDisplayerInfra()
        character = new MainCharacter('sam', 15, toBeMockable)
        character.init()
    })

    it('should equals 0', () => {
        expect(0).toBe(0)
    })

    it('should move to 1 left', () => {
        // Arrange
        // > toutes les données initiales pour lancer le test

        //#region Tests dom
        const div = document.querySelector<HTMLDivElement>('.main-character')
        expect(div).toBeTruthy()

        // const stylePosition = {
        //     column: div!.style.gridColumn,
        //     row: div!.style.gridRow,
        // }
        //#endregion

        // Act
        character.move('West')

        // Assert = Expect
        expect(character.position.x).toBe(-1)
        
        //#region Tests dom
        // TODO: not testable, see to expect that : expect(div!.style.gridColumn).toBe(1)
        // const event = new KeyboardEvent('keydown', {key: '37'})
        // document.dispatchEvent(event)
        // expect(div!.style.gridColumn).toBe(1)
        //#endregion
    })
});