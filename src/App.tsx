import { useState } from "react"
import Routes from "./routes"
import CartItemsContext, { CartItemsContextProps, initialValue } from "./contexts/CartItemsContext"
import { ThemeProvider } from "styled-components"
import colors from "./styles/themes/colors"
import GlobalStyles from "./styles/global"
import { Header } from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom"
import { ICoffeeList, coffee } from "./interfaces/ICoffee"

function App() {
	const [coffeeList, setCoffeeList] = useState<ICoffeeList[]>([
		//		{ id: 1, name: "Expresso Tradicional", price: 9.9, units: 1 },
	])

	return (
		<CartItemsContext.Provider value={{ coffeeList, setCoffeeList }}>
			<ThemeProvider theme={colors}>
				<GlobalStyles />
				<Router>
					<Header />
					<Routes />
				</Router>
			</ThemeProvider>
		</CartItemsContext.Provider>
	)
}

export default App
