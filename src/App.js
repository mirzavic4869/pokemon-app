import "./App.css";
import Home from "./pages/Home";
import React, { useEffect, useState } from "react";
import CardAllPokemon from "./components/CardAllPokemon";
import axios from "axios";

function App() {
	const [allPokemons, setAllPokemons] = useState([]);

	useEffect(() => {
		getAllPokemon();
	}, []);

	const getAllPokemon = async () => {
		await axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
			const { results } = response.data;
			if (results) {
				setAllPokemons(results);
				console.log(results);
			}
		});
	};

	return (
		<>
			<div>
				<Home />
			</div>
			<div className="my-4">
				{allPokemons.map((pokemon) => (
					<CardAllPokemon key={pokemon.name} name={pokemon.name} />
				))}
			</div>
		</>
	);
}

export default App;
