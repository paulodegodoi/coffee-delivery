import { Bank, CreditCard, CurrencyCircleDollar, MapPin, Money } from "phosphor-react"
import {
	Container,
	DeliveryAndPaymentContainer,
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
import { CoffeeItemCheckout } from "../../components/CoffeeItemCheckout"
import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"
import spinner from "../../assets/spinner.gif"
export function Checkout() {
	const [loading, setLoading] = useState(false)
	const { coffeeList, setCoffeeList } = useContext(CartItemsContext)
	const { register, handleSubmit, watch } = useForm()
	const [btnActive, setBtnActive] = useState("")
	const [itemsAmount, setItemsAmount] = useState("")
	const [totalAmount, setTotalAmount] = useState("")

	const navigate = useNavigate()

	const deliveryAmount = 5.49
	let forItemsAmount = 0
	coffeeList.forEach((c) => (forItemsAmount += c.price * c.units))

	const cep = watch("cep")
	const rua = watch("rua")
	const numero = watch("numero")
	const complemento = watch("complemento")
	const bairro = watch("bairro")
	const cidade = watch("cidade")
	const uf = watch("uf")

	const isSubmitDisabled = !cep || !rua || !numero || !bairro || !cidade || !uf || !btnActive

	let forTotalAmount = 0

	function handleClick(e: EventTarget) {
		setBtnActive(e.value)
	}

	useEffect(() => {
		setItemsAmount(forItemsAmount.toFixed(2))
		setTotalAmount((forItemsAmount + deliveryAmount).toFixed(2))
	}, [coffeeList])

	function handleDeleteItem(coffeeId: number) {
		setCoffeeList(coffeeList.filter((item) => item.id != coffeeId))
	}

	async function handleSubmitOrder(e: any) {
		console.log("subit")
		setLoading(true)
		await setTimeout(() => {
			setLoading(false)
			setCoffeeList([])
			navigate("/order-confirmed")
		}, 3000)
	}

	// function handleSubmitForm() {
	// 	let addressForm = document.getElementById("addreesForm") as HTMLFormElement
	// 	addressForm.submit()
	// }

	return (
		<>
			<Container id="addreesForm" onSubmit={handleSubmit(handleSubmitOrder)}>
				{loading && <img className="spinner" src={spinner} alt="" />}
				<DeliveryAndPaymentContainer>
					<h2>Complete seu pedido</h2>
					<div>
						<DeliveryAddress>
							<h3>
								<MapPin className="mapPin" />
								Endereço de Entrega
							</h3>
							<p>Informe o endereço onde deseja receber seu pedido</p>
							<div>
								<input
									className="cepInput"
									placeholder="CEP"
									{...register("cep")}
								/>
							</div>
							<div>
								<input
									className="ruaInput"
									placeholder="Rua"
									{...register("rua")}
								/>
							</div>
							<div>
								<input
									className="numeroInput"
									placeholder="Número"
									{...register("numero")}
								/>
								<input
									className="complementoInput"
									placeholder="Complemento"
									{...register("complemento")}
								/>
							</div>
							<div>
								<input
									className="bairroInput"
									placeholder="Bairro"
									{...register("bairro")}
								/>
								<input
									className="cidadeInput"
									placeholder="Cidade"
									{...register("cidade")}
								/>
								<input className="ufInput" placeholder="UF" {...register("uf")} />
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
									type="button"
								>
									<Bank />
									Pix
								</PaymentMethodButton>
								<PaymentMethodButton
									value="card"
									onClick={(e) => handleClick(e.target)}
									className={btnActive == "card" ? "active" : ""}
									type="button"
								>
									<CreditCard />
									Cartão de Crédito/Débito
								</PaymentMethodButton>
								<PaymentMethodButton
									value="money"
									onClick={(e) => handleClick(e.target)}
									className={btnActive == "money" ? "active" : ""}
									type="button"
								>
									<Money />
									Dinheiro
								</PaymentMethodButton>
							</div>
						</PaymentMethod>
					</div>
				</DeliveryAndPaymentContainer>
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
						{/* <Link to="/order-confirmed"> */}
						<ConfirmOrderButton disabled={isSubmitDisabled} type="submit">
							Confirmar pedido
						</ConfirmOrderButton>
						{/* </Link> */}
					</ConfirmOrder>
				</ConfirmOrderContainer>
			</Container>
		</>
	)
}
