import { observable, computed, action } from 'mobx';
import { fetchPokeList, fetchPoke, fetchPokeListWhithParam, fetchPokeListWhithQuantity } from "../gateway/gateway"

const store = observable(
    {
        pageCounter: 0,
        cardOnPage: 10,
        nextPage: "",
        prevPage: "",
        pokemonList: [],
        filteredPokemonList: [],
        filter: "",
        getPokemons() {
            let responseList = []
            fetchPokeList().then(response => {
                this.setNextPage(response.next)
                this.setPrevPage(response.previous)
                response.results.map(elem => responseList.push(fetchPoke(elem.url)))
                Promise.all(responseList).then(response => this.setPokemons(response))
            })
        },

        goNextPage() {
            let responseList = []
            fetchPokeListWhithParam(this.nextPage).then(response => {
                this.setNextPage(response.next)
                this.setPrevPage(response.previous)
                this.setPageCounter(this.pageCounter + this.cardOnPage)
                response.results.map(elem => responseList.push(fetchPoke(elem.url)))
                Promise.all(responseList).then(response => this.setPokemons(response))
            })
        },

        goPrevPage() {
            let responseList = []
            fetchPokeListWhithParam(this.prevPage).then(response => {
                this.setNextPage(response.next)
                this.setPrevPage(response.previous)
                this.setPageCounter(this.pageCounter - this.cardOnPage)
                response.results.map(elem => responseList.push(fetchPoke(elem.url)))
                Promise.all(responseList).then(response => this.setPokemons(response))
            })
        },

        changeCardQuantity(limit) {
            this.setCardOnPage(limit)
            let responseList = []
            fetchPokeListWhithQuantity(this.pageCounter, limit).then(response => {
                this.setNextPage(response.next)
                this.setPrevPage(response.previous)
                response.results.map(elem => responseList.push(fetchPoke(elem.url)))
                Promise.all(responseList).then(response => this.setPokemons(response))
            })
        },

        sortBy(param) {
            let newPokemonList = this.pokemonList.slice().sort((a, b) => {
                if (a[param] > b[param]) {
                    return 1
                }
                if (a[param] < b[param]) {
                    return -1
                }
                return 0
            })
            this.setPokemons(newPokemonList)

        },

        findPokemon(query) {
            this.setFilter(query)
            const regex = new RegExp(query.trim(), "i");
            let result = this.pokemonList.filter((elem) => elem.name.search(regex) >= 0);
            this.setFilteredPokemons(result);
        },

        setNextPage(param) {
            this.nextPage = param
        },

        setPrevPage(param) {
            this.prevPage = param
        },

        setPageCounter(param) {
            this.pageCounter = param
        },

        setPokemons(results) {
            this.pokemonList = results
        },

        setFilteredPokemons(param) {
            this.filteredPokemonList = param
        },

        setCardOnPage(param) {
            this.cardOnPage = param
        },

        setFilter(param) {
            this.filter = param
        },

        get pokemons() {
            if (this.filter === "") {
                return this.pokemonList
            } else {
                return this.filteredPokemonList
            }
        }

    },
    {
        pokemonList: observable,
        cardOnPage: observable,
        nextPage: observable,
        prevPage: observable,
        filteredPokemonList: observable,
        filter: observable,
        goNextPage: action.bound,
        goPrevPage: action.bound,
        getPokemons: action.bound,
        changeCardQuantity: action.bound,
        sortBy: action,
        setNextPage: action,
        setPokemons: action,
        setCardOnPage: action,
        setFilteredPokemons: action,
        pokemons: computed,
    }
)

export default store

