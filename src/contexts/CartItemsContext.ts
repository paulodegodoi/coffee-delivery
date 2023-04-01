import { createContext } from "react"

type CartItemsContextProps = {
	units: number
	setUnits: (units: number) => void
}

const initialValue = {
	units: 0,
	setUnits: (units: number) => {},
}

const CartItemsContext = createContext<CartItemsContextProps>(initialValue)

export default CartItemsContext
