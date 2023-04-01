import { ThemeProvider } from "styled-components"
import colors from "./styles/themes/colors"
import GlobalStyles from "./styles/global"
import { Header } from "./components/Header"
import { Main } from "./pages/Main"
import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./routes"
import CartItemsContext from "./contexts/CartItemsContext"

function App() {
	const [units, setUnits] = useState(0)

	return (
		<CartItemsContext.Provider value={{ units, setUnits }}>
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
