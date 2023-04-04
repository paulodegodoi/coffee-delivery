export type coffee = {
	coffeeId: number
	units: number
}

export interface ICoffeeList {
	id: number
	type?: CoffeeType[]
	name: string
	description?: string
	price: number
	units: number
}

export enum CoffeeType {
	Tradicional = "Tradicional",
	Gelado = "Gelado",
	Com_Leite = "Com Leite",
	Especial = "Especial",
	Alcoolico = "Alcoólico",
}
