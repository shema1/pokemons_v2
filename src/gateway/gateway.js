const baseUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

export const fetchPokeList = () => {
	return fetch(`${baseUrl}`).then(response => response.json())
}

export const fetchPokeListWhithParam = paramUrl => {
	return fetch(`${paramUrl}`).then(response => response.json())
}
export const fetchPokeListWhithQuantity = (offset, limit) => {
	return fetch(
		`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
	).then(response => response.json())
}

export const fetchPoke = url => {
	return fetch(url).then(response => response.json())
}