import styled from "styled-components"

export const Container = styled.form`
	display: flex;
	margin-bottom: 3rem;
	gap: 1rem;

	h2 {
		font-size: 1.2rem;
		font-family: "Baloo 2", cursive;
		margin-bottom: 10px;
	}

	.spinner {
		width: 100px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`

export const DeliveryAndPaymentContainer = styled.div`
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

	@media (max-width: 1000px) {
		width: 100%;
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

	@media (max-width: 800px) {
		div {
			flex-direction: column;

			input.ufInput {
				width: 100%;
			}
		}
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

	@media (max-width: 800px) {
		.buttonContainer {
			flex-direction: column;
			align-items: center;
			width: 100%;
		}
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

	@media (max-width: 800px) {
		width: 50%;
		padding: 1rem;

		svg {
			font-size: 1.3rem;
		}
	}
`

export const ConfirmOrderContainer = styled.div`
	width: 40%;

	@media (max-width: 1000px) {
		width: 100%;
	}
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

	@media (max-width: 1000px) {
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
	margin: auto;
	transition: 0.3s;

	:disabled {
		background-color: ${(props) => props.theme.colors.green_dark};
		color: ${(props) => props.theme.colors.background};
	}

	:hover:enabled {
		background-color: ${(props) => props.theme.colors.green_dark};
		color: ${(props) => props.theme.colors.green_light};
	}
`
