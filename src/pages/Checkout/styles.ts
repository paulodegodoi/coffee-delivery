import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	margin-bottom: 3rem;
	gap: 1rem;

	h2 {
		font-size: 1.2rem;
		font-family: "Baloo 2", cursive;
		margin-bottom: 10px;
	}

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`

export const LeftInformation = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	h3 {
		display: flex;
		align-items: center;
		gap: 5px;
		color: #fff;
	}

	p {
		color: #eeeeee;
	}

	.mapPin,
	.circleDollar {
		color: ${(props) => props.theme.colors.green_light};
	}

	input,
	button {
		transition: 0.5s;
	}
`

export const DeliveryAddress = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 2rem;
	background: #303030;
	padding: 2rem;
	border-radius: 7px;

	div {
		display: flex;
		gap: 10px;
	}

	.ruaInput {
		width: 100%;
	}

	.complementoInput {
		flex-grow: 100;
	}

	.cidadeInput {
		flex-grow: 100;
	}

	.ufInput {
		width: 45px;
	}

	input {
		height: 35px;
		border: 2px solid rgba(255, 255, 255, 0);
		border-radius: 7px;
		padding-left: 10px;
		background: ${(props) => props.theme.colors.green};
		color: #fff;
		outline: none;
		font-weight: bold;
		font-size: 0.9rem;
	}

	input:focus {
		background: ${(props) => props.theme.colors.green_light};
		color: ${(props) => props.theme.colors.background};
		border: 2px solid ${(props) => props.theme.colors.green};
	}

	input::placeholder {
		color: ${(props) => props.theme.colors.base_label};
	}
`

export const PaymentMethod = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: #303030;
	padding: 2rem;
	border-radius: 7px;

	.buttonContainer {
		display: flex;
		gap: 15px;
	}

	button.active {
		border: 2px solid ${(props) => props.theme.colors.green};
		background: ${(props) => props.theme.colors.green_light};
		color: ${(props) => props.theme.colors.background};
	}
`

export const PaymentMethodButton = styled.button`
	display: flex;
	flex-direction: column;
	border: 2px solid rgba(255, 255, 255, 0);
	flex: 1;
	background: ${(props) => props.theme.colors.green};
	text-transform: uppercase;
	color: #fff;
	height: 55px;
	font-weight: bold;
	letter-spacing: 0.5px;
`

export const ConfirmOrderContainer = styled.div`
	width: 40%;
`

export const ConfirmOrder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 25px;
	background-color: ${(props) => props.theme.colors.base_card};
	padding: 1rem 0;

	hr {
		width: 80%;
	}
	@media (max-width: 1200px) {
		width: 100%;
	}
`

export const TotalAmountContainer = styled.div`
	width: 80%;
	margin-top: 1rem;

	p,
	h4 {
		display: flex;
		justify-content: space-between;
		color: ${(props) => props.theme.colors.background};
		margin-bottom: 1rem;
	}

	p {
		font-size: 1rem;
	}

	h4 {
		font-size: 1.3rem;
	}
`

export const ConfirmOrderButton = styled.button`
	width: 80%;
	background-color: ${(props) => props.theme.colors.green};
	text-transform: uppercase;
	font-weight: bold;
	font-size: 1rem;
	color: ${(props) => props.theme.colors.text};
	transition: 0.3s;
	:hover {
		background-color: ${(props) => props.theme.colors.green_dark};
		color: ${(props) => props.theme.colors.green_light};
	}
`
