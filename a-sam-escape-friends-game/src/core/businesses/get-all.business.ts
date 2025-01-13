/**
 * 
 */
export interface GetAllBusiness<T extends {}> {
    getAll(): Promise<T[]>
}