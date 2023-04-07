import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const OrderContainer = styled.div`
	display: flex;
	gap: 25px;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`

export const OrderDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 25px;
	margin-top: 2rem;
	padding-left: 3rem;
	border: 2px solid #fff;
	border: double 4px transparent;
	border-radius: 80px;
	background-image: linear-gradient(#303030, #303030),
		radial-gradient(
			circle at top left,
			${(props) => props.theme.colors.yellow_light},
			${(props) => props.theme.colors.yellow},
			${(props) => props.theme.colors.yellow_dark}
		);
	background-origin: border-box;
	background-clip: padding-box, border-box;
	border-radius: 7px 40px 7px 40px;
	width: 50%;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 1rem;
	}

	.description {
		display: flex;

		svg {
			border-radius: 50%;
			width: 32px;
			height: 32px;
			color: #fff;
			margin-right: 0.8rem;
		}

		.mapin {
			color: ${(props) => props.theme.colors.green_dark};
			padding: 6px;
			background-color: ${(props) => props.theme.colors.green_light};
		}

		.timer {
			padding: 6px;
			background-color: ${(props) => props.theme.colors.yellow};
		}

		.circleDollar {
			padding: 6px;
			background-color: ${(props) => props.theme.colors.yellow_dark};
		}

		p {
			span {
				font-weight: bold;
			}
		}
	}
`

export const OrderImage = styled.div`
	img {
		width: 100%;
	}
`
