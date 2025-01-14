import MainCharacter from "../domains/game/models/main-character"
import { MainCharacterDisplayerInfra } from "../infras/game/main-character.displayer"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T = object> = new (...args: any[]) => T

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConstructorBis<T> = new (...args: any[]) => T

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ConstructorTer = new (...args: any[]) => object


//#region Pour aller plus loin
const mainCharacter = new MainCharacter('Sam', 15, new MainCharacterDisplayerInfra())
type TypeCharacter = typeof mainCharacter
// const item: TypeCharacter = {
//     surname: ''
// }

type ListPropertiesAndMethods = keyof MainCharacter
const item: ListPropertiesAndMethods = 'init'

function getProperty<T, K extends keyof T>(item: T, key: K) {
    return item[key]
}
const position = getProperty(mainCharacter, 'position')


type EventMap = {
    collision: {target: string},
    click: { x: number, y: number}
}
function onEvent<T extends keyof EventMap>(
    type: T,
    callback: (e: EventMap[T]) => void
) {
    console.info(type)
    //callback()
}

onEvent('click', e => console.info(e.x))


type SwitchNumberAndString<T> = T extends string ? number : Date


type MappedType<Input, Output> = {
    [K in keyof Input]: K extends keyof Output ? Output[K] : never
}

const itemOne = {
    id: 1,
    // label: 'Sam'
}

const itemTwo = {
    id: 'XE1520',
}

type Convert = MappedType<typeof itemOne, typeof itemTwo>
const result: Convert = {
    id: 'test'
}
//#endregion
