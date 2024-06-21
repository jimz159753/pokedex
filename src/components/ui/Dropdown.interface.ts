import { ChangeEventHandler } from "react"

export interface IDropdown {
    filterByType: (value: string) => void
    types: IType[]
}

interface IType {
    name: string
}