import { useContext, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Checkout } from "./pages/Checkout"
import { Main } from "./pages/Main"
import { OrderConfirmed } from "./pages/OrderConfirmed"

export default function DefaultRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="checkout" element={<Checkout />} />
			<Route path="order-confirmed" element={<OrderConfirmed />} />
		</Routes>
	)
}
