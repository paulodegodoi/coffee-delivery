import { useContext } from "react"
import { CoffeeList } from "../../components/CoffeeList"
import { Intro } from "../../components/Intro"
import { Container } from "./styles"
import CartItemsContext from "../../contexts/CartItemsContext"

export function Main() {
	const { units, setUnits } = useContext(CartItemsContext)

	return (
		<Container>
			<Intro />
			<CoffeeList units={units} setUnits={setUnits} />
		</Container>
	)
}
