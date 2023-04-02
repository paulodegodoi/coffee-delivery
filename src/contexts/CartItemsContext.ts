import { Dispatch, SetStateAction, createContext } from "react"
import { coffee } from "../interfaces/ICoffee"
// type CartItemsContextProps = {
// 	units: number
// 	setUnits: (units: number) => void
// }

export interface CartItemsContextProps {
	coffeeList: coffee[]
	setCoffeeList: Dispatch<SetStateAction<coffee[]>>
}
;[]

// const initialValue = {
// 	units: 0,
// 	setUnits: (units: number) => {},
// }

export const initialValue = {
	coffeeList: [{ coffeeId: 0, units: 0 }],
	setCoffeeList: () => [],
}

const CartItemsContext = createContext<CartItemsContextProps>(initialValue)

export default CartItemsContext
