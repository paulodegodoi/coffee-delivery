import styled from "styled-components"

export const Container = styled.div`
	h3 {
		font-family: "Baloo 2", cursive;
		font-size: 2rem;
		color: ${(props) => props.theme.colors.yellow_dark};
		text-align: center;

		@media (max-width: 800px) {
			text-align: center;
		}
	}
`

export const CoffeeListContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 2.5rem;
	gap: 35px;

	@media (max-width: 800px) {
		justify-content: center;
	}

	.checkoutLayout {
		flex-direction: row;
	}
`

export const Coffee = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 256px;
	height: 310px;
	background-color: ${(props) => props.theme.colors.base_card};
	border-radius: 7px 40px 7px 40px;
	padding: 1.2rem;
`

export const Image = styled.img`
	margin-top: -3rem;
`

export const TypeContainer = styled.div`
	display: flex;
	gap: 5px;
`

export const Type = styled.p`
	background-color: ${(props) => props.theme.colors.yellow_light};
	color: ${(props) => props.theme.colors.yellow_dark};
	font-size: 12px;
	padding: 3px 8px;
	border-radius: 15px;
	margin-top: 0.9rem;
`

export const Name = styled.h4`
	margin-top: 0.7rem;
	font-family: "Baloo 2", cursive;
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.background};
`

export const Description = styled.p`
	margin-top: 0.3rem;
	text-align: center;
	font-weight: 300;
	color: ${(props) => props.theme.colors.base_label};
`

export const ShopContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	margin-top: 2rem;

	p {
		margin-right: 1.5rem;
		color: ${(props) => props.theme.colors.background};

		span {
			margin-left: 0.3rem;
			font-family: "Baloo 2", cursive;
			font-size: 1.5rem;
			font-weight: bold;
		}
	}
`

export const CartAmount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	width: 72px;
	height: 100%;
	border-radius: 7px;
	background-color: ${(props) => props.theme.colors.base_input};
	transition: 0.3s;

	.buttonAmount {
		color: ${(props) => props.theme.colors.green};

		&:hover {
			color: ${(props) => props.theme.colors.green_dark};
		}
	}
`

export const InputAmount = styled.input`
	font-size: 1rem;
	width: 20px;
	text-align: center;
	background: none;
	border: none;
`

export const CartContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	height: 100%;

	.shoppingCart {
		width: 38px;
		height: 38px;
		padding: 8px;
		border-radius: 7px;
		color: white;
		background-color: ${(props) => props.theme.colors.green};
		transition: 0.3s;

		&:hover {
			background-color: ${(props) => props.theme.colors.green_dark};
		}
	}
`
