import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { dataCoffeeList } from "../../data/coffeeList"

import {
	CartAmount,
	CartContainer,
	Coffee,
	CoffeeListContainer,
	Container,
	Description,
	Image,
	InputAmount,
	Name,
	ShopContainer,
	Type,
	TypeContainer,
} from "./styles"
import { ICoffeeList, coffee } from "../../interfaces/ICoffee"
import CartItemsContext from "../../contexts/CartItemsContext"

// interface ICoffeeListProps {
// 	units: number
// 	setUnits: (value: number) => void
// }

export function CoffeeList() {
	// useEffect(() => {
	// 	if (localStorage.hasOwnProperty("coffeeList")) {
	// 		let items = JSON.parse(localStorage.getItem("coffeeList")!)
	// 		let units = 0
	// 		items.forEach((item) => {
	// 			units += item.units
	// 		})

	// 		setUnits(units)
	// 	}
	// }, [])

	const { coffeeList, setCoffeeList } = useContext(CartItemsContext)

	function formatString(string: string) {
		string = string.toLocaleLowerCase()
		string = string.replace(/ /g, "_")
		string = string.replace("é", "e").replace("á", "a").replace("ê", "e")

		return string
	}

	function decreaseAmount(id: number) {
		let input = document.getElementById(`coffeeAmount_${id}`)
		let amount = parseInt((input as HTMLInputElement)?.value)
		if (amount > 1) {
			amount -= 1
		}
		;(input as HTMLInputElement).value = amount.toString()
	}

	function increaseAmount(id: number) {
		const input = document.getElementById(`coffeeAmount_${id}`)
		let amount = parseInt((input as HTMLInputElement)?.value)
		if (amount >= 1) {
			amount += 1
		}
		;(input as HTMLInputElement).value = amount.toString()
	}

	function handleAddToCart(coffee: ICoffeeList) {
		const input = document.getElementById(`coffeeAmount_${coffee.id}`)
		const coffeeAmount = parseInt((input as HTMLInputElement).value)
		const _coffee = {
			id: coffee.id,
			name: coffee.name,
			price: coffee.price,
			units: coffeeAmount,
		}

		let id = coffeeList.findIndex((c) => c.id == _coffee.id)
		console.log(id)

		if (id != -1) {
			let updatedCoffeeList = coffeeList
			updatedCoffeeList[id].units += _coffee.units
			console.log(updatedCoffeeList)
			setCoffeeList(updatedCoffeeList)
		} else setCoffeeList([...coffeeList, _coffee])
		// setUnits((units += coffeeAmount))
		// let coffeeList = []
		// if (localStorage.hasOwnProperty("coffeeList")) {
		// 	coffeeList = JSON.parse(localStorage.getItem("coffeeList")!)
		// }
		// coffeeList.push(_coffee)
		// localStorage.setItem("coffeeList", JSON.stringify(coffeeList))
	}

	return (
		<Container>
			<h3>Nossos cafés</h3>
			<CoffeeListContainer>
				{dataCoffeeList.map((coffee) => (
					<Coffee key={coffee.id}>
						<Image
							src={`src/assets/coffees/${formatString(coffee.name)}.png`}
							alt="coffee image"
						/>
						<TypeContainer>
							{coffee.type?.map((type, index) => (
								<Type key={index}>{type}</Type>
							))}
						</TypeContainer>
						<Name>{coffee.name}</Name>
						<Description>{coffee.description}</Description>
						<ShopContainer>
							<p>
								R$<span>{coffee.price.toFixed(2)}</span>
							</p>
							<CartContainer>
								<CartAmount>
									<button
										className="buttonAmount"
										onClick={(e) => decreaseAmount(coffee.id)}
									>
										<Minus size={14} weight="bold" />
									</button>

									<InputAmount
										id={`coffeeAmount_${coffee.id}`}
										defaultValue={1}
										// onChange={(e) =>
										// 	setUnits(parseInt(e.target.value))
										// }
										readOnly
									/>

									<button
										className="buttonAmount"
										onClick={(e) => increaseAmount(coffee.id)}
									>
										<Plus size={14} weight="bold" />
									</button>
								</CartAmount>
								<button
									className="shoppingCart"
									onClick={() => handleAddToCart(coffee)}
								>
									<ShoppingCart size={22} weight="fill" />
								</button>
							</CartContainer>
						</ShopContainer>
					</Coffee>
				))}
			</CoffeeListContainer>
		</Container>
	)
}
