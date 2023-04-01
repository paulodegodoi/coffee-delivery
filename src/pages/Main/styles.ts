import styled from "styled-components"

export const Container = styled.main`
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	gap: 100px;

	@media (max-width: 800px) {
		gap: 50px;
		margin-top: 0;
		padding-bottom: 2rem;
	}
`
