import { GetAllResultAsMethod } from "../../../core/apis/custom-types";
import { GetAllResult } from "../../../core/apis/get-all-result";
import { Person, PersonsResult } from "./models/person";

export interface GetAllPersonsResult extends GetAllResult<Person, PersonsResult> {
    
}

//export type GetAllPersonResultBisOfT<T extends {}> = GetAllResult<T, PersonsResult>
export type GetAllPersonResultBis = GetAllResult<Person, PersonsResult>

export class GetAllPersonInfrastructure implements GetAllPersonResultBis {
    getAll(): Promise<PersonsResult> {
        throw new Error("Method not implemented.");
    }
}

export type GetAllPersonResultAsMethod = GetAllResultAsMethod<PersonsResult>

export function getAllPersonResult(): Promise<PersonsResult> {
    throw new Error("Method not implemented.");
}