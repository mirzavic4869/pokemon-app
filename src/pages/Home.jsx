import React, { useState } from "react";
import Search from "../components/Search";
import { Row, Col } from "react-bootstrap";
import PokemonData from "../components/PokemonData";

const Home = () => {
	const [pokemon, setPokemon] = useState("");
	const [loading, setLoading] = useState(false);

	const getPokemon = async (pokemon) => {
		setLoading(true);
		const query = {
			pokemon: "pokemon",
		};
		await fetch(`https://pokeapi.co/api/v2/${query.pokemon}/${pokemon}`)
			.then((response) => response.json())
			.then((results) => {
				setPokemon(results);
				setLoading(false);
				console.log(results);
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<Search getPokemon={getPokemon} />
			{!loading && pokemon ? (
				<Row>
					<Col>
						<PokemonData name={pokemon.name} sprite={pokemon.sprites.front_default} abilities={pokemon.abilities} height={pokemon.height} species={pokemon.species.name} stats={pokemon.stats} />
					</Col>
				</Row>
			) : null}
		</div>
	);
};

export default Home;
