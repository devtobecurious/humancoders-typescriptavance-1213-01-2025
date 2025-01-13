import { ItemsResult } from "./custom-types";

export interface GetAllResult<BaseItem extends {}, Result extends ItemsResult<BaseItem>> {
    getAll(): Promise<Result>
}