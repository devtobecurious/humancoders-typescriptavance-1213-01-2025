import MainCharacter from "../models/main-character"

export interface MainCharacterDisplayer {
    init(mainCharacter: MainCharacter): void
    update(): void
}