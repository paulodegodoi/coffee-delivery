import { CurrencyCircleDollar, MapPin, ShoppingCart, Timer } from "phosphor-react"
import { Container, OrderContainer, OrderDetails, OrderImage } from "./styles"

import orderConfirmedPng from "../../assets/orderConfirmed.png"

export function OrderConfirmed() {
	return (
		<Container>
			<h2>Uhu! Pedido confirmado</h2>
			<p>Agora é só aguardar que logo o café chegará até você</p>
			<OrderContainer>
				<OrderDetails>
					<div className="description">
						<MapPin className="mapin" weight="fill" size={16} />
						<div>
							<p>
								Entrega em <span>Rua Agostinho Navarro, 971</span> <br />
								<span>Conceição - Osasco, SP</span>
							</p>
						</div>
					</div>
					<div className="description">
						<Timer className="timer" weight="fill" />
						<div>
							<p>
								Previsão de entrega <br />
								<span>20 min - 30 min</span>
							</p>
						</div>
					</div>
					<div className="description">
						<CurrencyCircleDollar className="circleDollar" weight="fill" size={16} />
						<div>
							<p>
								Pagamento na entrega <br />
								<span>Cartão de Crédito</span>
							</p>
						</div>
					</div>
				</OrderDetails>
				<OrderImage>
					<img src={orderConfirmedPng} alt="teste" />
				</OrderImage>
			</OrderContainer>
		</Container>
	)
}
