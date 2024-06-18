import { ChangeEventHandler } from "react"

export interface IDropdown {
    filterByType: ChangeEventHandler<HTMLSelectElement>
    types: IType[]
}

interface IType {
    name: string
}