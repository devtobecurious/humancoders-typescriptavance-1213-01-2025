import { PersonsResult } from "./models/person";

export class GetAllPersonInfrastructure {
    getAll(): Promise<PersonsResult> {
        return new Promise<PersonsResult>(resolve => {
            setTimeout(() => {
                const result: PersonsResult = {
                    results: [
                        {name: 'Sam', type: 'Hobbit'},
                        {name: 'Blorg', type: 'Orc'},
                    ]
                }
                resolve(result)
            }, 1500);
        })
    }
}