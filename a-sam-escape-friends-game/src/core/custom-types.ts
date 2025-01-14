// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = object> = new (...args: any[]) => T

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConstructorBis<T> = new (...args: any[]) => T

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConstructorTer = new (...args: any[]) => object
