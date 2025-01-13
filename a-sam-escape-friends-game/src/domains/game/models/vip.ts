/**
 * 
 */
export interface Vip<T extends Pass> {
    accessVip(): void

    get pass(): T

    get isReadyToVip(): boolean
}

export type Pass = {
    code: string
}