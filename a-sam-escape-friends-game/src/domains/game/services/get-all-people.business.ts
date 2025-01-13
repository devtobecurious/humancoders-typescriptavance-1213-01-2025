import { GetAllBusiness } from "../../../core/businesses/get-all.business";
import Character from "../models/character";
import Enemy from "../models/enemy";
import MainCharacter from "../models/main-character";
import { GetAllPersonInfrastructure } from "./get-all-person.infrastructure";

/**
 * @todo:  13/01/2025: add unit tests !
 */
export default class GetAllPeopleBusiness implements GetAllBusiness<Character> {
    constructor(private infra: GetAllPersonInfrastructure) {}

    async getAll(): Promise<Character[]> {
        return (await this.infra.getAll()).results.map(item => {
            let result: Character  

            if(item.type === 'Hobbit') {
                result = new MainCharacter(item.name, 15)
            } else {
                result = new Enemy(item.name)
            }

            return result
        })
    }
}