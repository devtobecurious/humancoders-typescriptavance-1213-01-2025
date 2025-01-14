import { Displayer } from "../../../core/displayers/displayer"
import MainCharacter from "../models/main-character"


export interface MainCharacterDisplayer extends Displayer<MainCharacter> {
    init(mainCharacter: MainCharacter): void
    update(): void
}