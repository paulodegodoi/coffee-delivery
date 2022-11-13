import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      yellow: string
      yellow_light: string
      yellow_dark: string
      purple: string
      purple_light: string
      purple_dark: string
  
      background: string
      text: string
      base_card: string
      base_subtitle: string
      base_label: string
      base_input: string
    }
  }
}