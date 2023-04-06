import React, { useContext, useEffect, useState } from "react"
import { ICoffeeList } from "../../interfaces/ICoffee"
import {
	Coffee,
	Image,
	TypeContainer,
	Name,
	Description,
	ShopContainer,
	CartContainer,
	CartAmount,
	InputAmount,
	Type,
	Details,
	MidDetails,
} from "./styles"
import { Car, Minus, Plus, Trash } from "phosphor-react"
import CartItemsContext from "../../contexts/CartItemsContext"

interface ICoffeeItem {
	coffee: ICoffeeList
	handleDeleteItem?: (id: number) => void
}

export function CoffeeItemCheckout(coffeeProps: ICoffeeItem) {
	const { coffeeList, setCoffeeList } = useContext(CartItemsContext)
	const coffee = coffeeProps.coffee
	const [units, setUnits] = useState(coffee.units)
	function handleDecreaseAmount() {
		console.log(units)
		if (units == 1) return
		setUnits((prevState) => prevState - 1)
	}

	useEffect(() => {
		coffee.units = units
		let updateUnits = coffeeList.map((i) => {
			if (i.id == coffee.id) {
				return { ...i, units: units }
			}
			return i
		})
		setCoffeeList(updateUnits)
	}, [units])

	console.log(coffeeProps.coffee)
	function formatString(string: string) {
		string = string.toLocaleLowerCase()
		string = string.replace(/ /g, "_")
		string = string.replace("é", "e").replace("á", "a").replace("ê", "e")

		return string
	}
	return (
		<Coffee key={coffee.id} className={coffee.description == undefined ? "checkoutLayout" : ""}>
			<Details>
				<Image
					src={`src/assets/coffees/${formatString(coffee.name)}.png`}
					alt="coffee image"
				/>
				{/* {coffee.type && (
				<TypeContainer>
					{coffee.type?.map((type, index) => (
						<Type key={index}>{type}</Type>
					))}
				</TypeContainer>
			)} */}

				<MidDetails>
					<Name>{coffee.name}</Name>
					<ShopContainer>
						<CartContainer>
							<CartAmount>
								<button className="buttonAmount" onClick={handleDecreaseAmount}>
									<Minus size={14} weight="bold" />
								</button>

								<InputAmount
									id={`coffeeAmount_${coffee.id}`}
									value={units}
									// onChange={(e) =>
									// 	setUnits(parseInt(e.target.value))
									// }
									readOnly
								/>

								<button
									className="buttonAmount"
									onClick={(e) => setUnits((prev) => prev + 1)}
								>
									<Plus size={14} weight="bold" />
								</button>
							</CartAmount>
							<CartAmount>
								<button
									className="removeBtn"
									onClick={() => coffeeProps.handleDeleteItem!(coffee.id)}
								>
									<Trash size={14} />
									REMOVER
								</button>
							</CartAmount>
						</CartContainer>
					</ShopContainer>
				</MidDetails>

				<p>R${coffee.price.toFixed(2)}</p>
			</Details>

			{/* {coffee.description && <Description>{coffee.description}</Description>} */}
		</Coffee>
	)
}
