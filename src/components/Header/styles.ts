import styled from "styled-components"

export const Container = styled.header`
	position: sticky;
	display: flex;
	justify-content: space-between;
	top: 0;
	width: 100%;
	max-width: 1140px;
	padding: 1.5rem 0;
	background-color: ${(props) => props.theme.colors.background};

	a {
		display: flex;
		gap: 10px;
		text-decoration: none;
		color: ${(props) => props.theme.colors.text};
	}

	img {
		filter: hue-rotate(150deg);
	}

	@media (max-width: 800px) {
		height: 120px;
		align-items: center;

		h1 {
			width: 80px;
		}

		a {
			font-size: 10px;
			max-height: 40px;
			align-items: center;
		}
	}
`

export const Info = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;

	p,
	svg {
		display: flex;
		align-items: center;
		border-radius: 7px;
		height: 100%;
	}

	p {
		width: auto;
		max-height: 40px;
		padding: 8px;
		justify-content: center;
		color: ${(props) => props.theme.colors.green_dark};
		background-color: ${(props) => props.theme.colors.green_light};

		.mapPin {
			color: ${(props) => props.theme.colors.green};
		}
	}

	.shoppingCart {
		position: relative;
		color: ${(props) => props.theme.colors.yellow_dark};
		background-color: ${(props) => props.theme.colors.yellow_light};

		.amount {
			background-color: ${(props) => props.theme.colors.yellow_dark};
			border-radius: 50%;
			color: ${(props) => props.theme.colors.background};
			font-size: 11px;
			width: 14px;
			height: 14px;
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: -4px;
			right: -4px;
		}
	}
`
