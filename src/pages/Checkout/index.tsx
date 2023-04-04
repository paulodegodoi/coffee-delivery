import { Bank, CreditCard, CurrencyCircleDollar, MapPin, Money } from "phosphor-react"
import {
	Container,
	LeftInformation,
	DeliveryAddress,
	PaymentMethod,
	PaymentMethodButton,
	ConfirmOrder,
} from "./styles"
import { useContext, useState } from "react"
import CartItemsContext from "../../contexts/CartItemsContext"
import { CoffeeItem } from "../../components/Coffee"

export function Checkout() {
	const { coffeeList, setCoffeeList } = useContext(CartItemsContext)
	const [btnActive, setBtnActive] = useState("")

	function handleClick(e: EventTarget) {
		setBtnActive(e.value)
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
				<div>
					<h2>Confirmar Pedido</h2>
					<ConfirmOrder>
						{coffeeList.map((c) => (
							<CoffeeItem key={c.id} coffee={c} />
						))}
					</ConfirmOrder>
				</div>
			</Container>
		</>
	)
}
