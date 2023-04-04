import React, { useState } from "react"
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
} from "./styles"
import { Minus, Plus } from "phosphor-react"

interface ICoffeeItem {
	coffee: ICoffeeList
}

export function CoffeeItem(c: ICoffeeItem) {
	const coffee = c.coffee
	const [units, setUnits] = useState(coffee.units)
	function handleDecreaseAmount() {
		console.log(units)
		if (units == 1) return
		setUnits((prevState) => prevState - 1)
	}
	function formatString(string: string) {
		string = string.toLocaleLowerCase()
		string = string.replace(/ /g, "_")
		string = string.replace("é", "e").replace("á", "a").replace("ê", "e")

		return string
	}
	return (
		<Coffee key={coffee.id} className={coffee.description == undefined ? "checkoutLayout" : ""}>
			<Image src={`src/assets/coffees/${formatString(coffee.name)}.png`} alt="coffee image" />
			{coffee.type && (
				<TypeContainer>
					{coffee.type?.map((type, index) => (
						<Type key={index}>{type}</Type>
					))}
				</TypeContainer>
			)}
			<Name>{coffee.name}</Name>
			{coffee.description && <Description>{coffee.description}</Description>}
			<ShopContainer>
				<p>
					R$<span>{coffee.price.toFixed(2)}</span>
				</p>
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
							onClick={(e) => setUnits(coffee.units + 1)}
						>
							<Plus size={14} weight="bold" />
						</button>
					</CartAmount>
				</CartContainer>
			</ShopContainer>
		</Coffee>
	)
}
