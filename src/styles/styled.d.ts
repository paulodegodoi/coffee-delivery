import "styled-components"

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			yellow: string
			yellow_light: string
			yellow_dark: string
			green: string
			green_light: string
			green_dark: string

			background: string
			text: string
			base_card: string
			base_subtitle: string
			base_label: string
			base_input: string
		}
	}
}
