export type BaseItem = {}

export type ItemsResult<T extends BaseItem> = {
    page?: number
    nb?: number
    results: T[]
}

export type GetAllResultAsMethod<T> = () => Promise<T>