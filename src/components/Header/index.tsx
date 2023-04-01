import { Container, Info } from "./styles"
import Logo from "../../assets/logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"

import CartItemsContext from "../../contexts/CartItemsContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

export function Header() {
	const { units } = useContext(CartItemsContext)

	return (
		<Container>
			<Link to="/">
				<img src={Logo} alt="logo" />
				<h1>Coffee Delivery</h1>
			</Link>
			<Info>
				<p>
					<MapPin size={22} weight="fill" className="mapPin" />
					Osasco, SP
				</p>
				<Link to="/checkout">
					<button className="shoppingCart">
						<ShoppingCart size={22} weight="fill" />
						<span className="amount">{units > 0 && units}</span>
					</button>
				</Link>
			</Info>
		</Container>
	)
}
