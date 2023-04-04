import { Dispatch, SetStateAction, createContext } from "react"
import { CoffeeType, ICoffeeList, coffee } from "../interfaces/ICoffee"
// type CartItemsContextProps = {
// 	units: number
// 	setUnits: (units: number) => void
// }

export interface CartItemsContextProps {
	coffeeList: ICoffeeList[]
	setCoffeeList: Dispatch<SetStateAction<ICoffeeList[]>>
}
;[]

// const initialValue = {
// 	units: 0,
// 	setUnits: (units: number) => {},
// }

export const initialValue = {
	coffeeList: [{ id: 1, type: [], name: "teste", description: "", price: 0, units: 0 }],
	setCoffeeList: () => [],
}

const CartItemsContext = createContext<CartItemsContextProps>(initialValue)

export default CartItemsContext
