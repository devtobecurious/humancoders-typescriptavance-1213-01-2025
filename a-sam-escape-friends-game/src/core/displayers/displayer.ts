export interface Displayer<T extends object> {
    init(item: T): void
    update(): void
}