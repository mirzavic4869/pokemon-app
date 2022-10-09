import "./App.css";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import CardAllPokemon from "./components/CardAllPokemon";
import { Button } from "react-bootstrap";

function App() {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

	const getAllPokemons = async () => {
		const res = await fetch(loadMore);
		const data = await res.json();

		setLoadMore(data.next);

		function createPokemonObject(results) {
			results.forEach(async (pokemon) => {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
				const data = await res.json();
				setAllPokemons((currentList) => [...currentList, data]);
				await allPokemons.sort((a, b) => a.id - b.id);
			});
		}
		createPokemonObject(data.results);
	};

	useEffect(() => {
		getAllPokemons();
	});
	return (
		<>
			<div>
				<Home />
			</div>
			<div className="my-4">
				{allPokemons.map((pokemon, index) => (
					<CardAllPokemon key={index} id={pokemon.id} image={pokemon.sprites.other.dream_world.front_default} name={pokemon.name} type={pokemon.types[0].type.name} />
				))}
			</div>
			<div className="d-flex justify-content-center pb-2">
				<Button className="load-more" onClick={() => getAllPokemons()}>
					Load more
				</Button>
			</div>
		</>
	);
}

export default App;
