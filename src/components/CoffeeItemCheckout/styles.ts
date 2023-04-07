import styled from "styled-components"

export const Coffee = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${(props) => props.theme.colors.base_card};
	//border-bottom-left-radius: 25px;
	//border-bottom-right-radius: 25px;
	border-radius: 25px;
	//border-bottom: 2px solid #000;
	padding: 1.2rem;
	position: relative;

	p {
		position: absolute;
		right: 15px;
		margin-top: 1rem;
		align-self: start;
		font-size: 1rem;
		color: #000;
	}

	@media (max-width: 1000px) {
		p {
			top: 1px;
		}
	}
`

export const Details = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 10px;
	position: relative;

	@media (max-width: 800px) {
		p {
			position: relative;
		}
	}
`

export const MidDetails = styled.div`
	display: flex;
	flex-direction: column;
`

export const Image = styled.img`
	width: 60px;
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
	height: 30px;
	align-items: center;
	//margin-top: 2rem;

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
	height: 100%;
	width: auto;
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
	width: 10px;
	text-align: center;
	background: none;
	border: none;
`

export const CartContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	height: 100%;

	.removeBtn {
		display: flex;
		gap: 2px;
		width: 100px;
		font-size: 0.75rem;
		color: #bb1f24;
		transition: 0.3s;

		:hover {
			transform: scale(1.04);
			font-weight: bold;
		}
	}

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
