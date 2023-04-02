import { Container, Info } from "./styles"
import Logo from "../../assets/logo.png"
import { MapPin, ShoppingCart } from "phosphor-react"

import CartItemsContext from "../../contexts/CartItemsContext"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Header() {
	let amount = 0

	const { coffeeList } = useContext(CartItemsContext)
	const [itemsAmount, setItemsAmount] = useState(0)

	coffeeList.forEach((c) => {
		amount += c.units
	})

	useEffect(() => {
		setItemsAmount(amount)
	}, [amount])

	console.log(coffeeList)

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
						{itemsAmount > 0 && (
							<span className="amount">
								{itemsAmount > 0 && itemsAmount}
							</span>
						)}
					</button>
				</Link>
			</Info>
		</Container>
	)
}
