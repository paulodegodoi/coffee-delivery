import { Container } from "./styles"
import CoffeeDelivery from "../../assets/coffeeDelivery.png"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

export function Intro() {
	return (
		<Container>
			<div className="slogan">
				<h2>Encontre o café perfeito para qualquer hora do dia</h2>
				<p>
					Com o Coffee Delivery você recebe seu café onde estiver, a
					qualquer hora
				</p>
				<div className="description">
					<div>
						<p>
							<ShoppingCart
								className="shoppingCart"
								weight="fill"
								size={16}
							/>
							Compra simples e segura
						</p>
						<p>
							<Timer className="timer" weight="fill" size={16} />
							Entrega rápida e rastreada
						</p>
					</div>
					<div>
						<p>
							<Package className="box" weight="fill" size={16} />
							Embalagem mantém o café intacto
						</p>
						<p>
							<Coffee
								className="coffee"
								weight="fill"
								size={16}
							/>
							O café chega fresquinho até você
						</p>
					</div>
				</div>
			</div>
			<div className="imageSite">
				<img src={CoffeeDelivery} alt="coffeeDelivery" />
			</div>
		</Container>
	)
}
