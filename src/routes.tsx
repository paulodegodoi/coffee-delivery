import { useContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import CartItemsContext from "./contexts/CartItemsContext"
import { Checkout } from "./pages/Checkout"
import { Main } from "./pages/Main"

export default function DefaultRoutes() {
	const { units, setUnits } = useContext(CartItemsContext)

	return (
		<Routes>
			<Route
				path="/"
				element={<Main units={units} setUnits={setUnits} />}
			/>
			<Route path="checkout" element={<Checkout />} />
		</Routes>
	)
}
