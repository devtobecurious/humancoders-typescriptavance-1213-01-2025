/**
 * 
 */
export interface Vip<T> {
    accessVip(): void

    get pass(): T

    get isReady(): boolean
}

export type Pass = {
    code: string
}