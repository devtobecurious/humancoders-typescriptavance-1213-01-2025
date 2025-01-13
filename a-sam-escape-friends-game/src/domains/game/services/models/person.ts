import { ItemsResult } from "../../../../core/apis/custom-types"

export type PersonType = 'Orc' | 'Urukhai' | 'Hobbit'

export type Person = {
    name: string,
    type: PersonType
}

// export type PersonsResult = {
//     results: Person[]
// }

export type PersonsResult = ItemsResult<Person>