import { Bank, CreditCard, CurrencyCircleDollar, MapPin, Money } from "phosphor-react"
import {
	Container,
	LeftInformation,
	DeliveryAddress,
	PaymentMethod,
	PaymentMethodButton,
	ConfirmOrder,
	ConfirmOrderContainer,
	TotalAmountContainer,
	ConfirmOrderButton,
} from "./styles"
import { useContext, useEffect, useState } from "react"
import CartItemsContext from "../../contexts/CartItemsContext"
import { CoffeeItem } from "../../components/Coffee"
import { CoffeeItemCheckout } from "../../components/CoffeeItemCheckout"

export function Checkout() {
	const { coffeeList, setCoffeeList } = useContext(CartItemsContext)
	const [btnActive, setBtnActive] = useState("")
	const [itemsAmount, setItemsAmount] = useState("")
	const [totalAmount, setTotalAmount] = useState("")

	const deliveryAmount = 5.49
	let forItemsAmount = 0
	coffeeList.forEach((c) => (forItemsAmount += c.price * c.units))

	let forTotalAmount = 0

	function handleClick(e: EventTarget) {
		setBtnActive(e.value)
	}

	useEffect(() => {
		setItemsAmount(forItemsAmount.toFixed(2))
		setTotalAmount((forItemsAmount + deliveryAmount).toFixed(2))
	}, [coffeeList])

	//setItemsAmount(forItemsAmount.toFixed(2))
	//setTotalAmount((forItemsAmount + deliveryAmount).toFixed(2))

	function handleDeleteItem(coffeeId: number) {
		//let removeIndex = coffeeList.map((item) => item.id).indexOf(coffeeId)
		//console.log(removeIndex)
		setCoffeeList(coffeeList.filter((item) => item.id != coffeeId))
		//console.log(te)
		//if (removeIndex != -1) setCoffeeList(coffeeList)
	}

	return (
		<>
			<Container>
				<LeftInformation>
					<h2>Complete seu pedido</h2>
					<div>
						<DeliveryAddress>
							<h3>
								<MapPin className="mapPin" />
								Endereço de Entrega
							</h3>
							<p>Informe o endereço onde deseja receber seu pedido</p>
							<div>
								<input className="cepInput" placeholder="CEP" />
							</div>
							<div>
								<input className="ruaInput" placeholder="Rua" />
							</div>
							<div>
								<input className="numeroInput" placeholder="Número" />
								<input className="complementoInput" placeholder="Complemento" />
							</div>
							<div>
								<input className="bairroInput" placeholder="Bairro" />
								<input className="cidadeInput" placeholder="Cidade" />
								<input className="ufInput" placeholder="UF" />
							</div>
						</DeliveryAddress>
						<PaymentMethod>
							<h3>
								<CurrencyCircleDollar className="circleDollar" />
								Pagamento
							</h3>
							<p>O pagamento é feito na entrega. Escolha a forma que deseja pagar:</p>
							<div className="buttonContainer">
								<PaymentMethodButton
									value="pix"
									onClick={(e) => handleClick(e.target)}
									className={btnActive == "pix" ? "active" : ""}
								>
									<Bank />
									Pix
								</PaymentMethodButton>
								<PaymentMethodButton
									value="card"
									onClick={(e) => handleClick(e.target)}
									className={btnActive == "card" ? "active" : ""}
								>
									<CreditCard />
									Cartão de Crédito/Débito
								</PaymentMethodButton>
								<PaymentMethodButton
									value="money"
									onClick={(e) => handleClick(e.target)}
									className={btnActive == "money" ? "active" : ""}
								>
									<Money />
									Dinheiro
								</PaymentMethodButton>
							</div>
						</PaymentMethod>
					</div>
				</LeftInformation>
				<ConfirmOrderContainer>
					<h2>Confirmar Pedido</h2>
					<ConfirmOrder>
						{coffeeList?.map((c) => (
							<>
								<CoffeeItemCheckout
									key={c.id}
									coffee={c}
									handleDeleteItem={handleDeleteItem}
								/>
								<hr />
							</>
						))}
						<TotalAmountContainer>
							<p>
								Total dos itens <span>R$ {itemsAmount}</span>
							</p>
							<p>
								Entrega <span>R$ {deliveryAmount}</span>
							</p>
							<h4>
								Total <span>R$ {totalAmount}</span>
							</h4>
						</TotalAmountContainer>
						<ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
					</ConfirmOrder>
				</ConfirmOrderContainer>
			</Container>
		</>
	)
}
