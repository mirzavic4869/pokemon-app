import React, { useState } from "react";
import Search from "../components/Search";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import PokemonData from "../components/PokemonData";

const Home = () => {
	const [pokemon, setPokemon] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);

	const getPokemon = async (pokemon) => {
		if (!pokemon) {
			setErrorMsg("You must enter pokemon");
			setError(true);
			return;
		}
		setError(false);
		setLoading(true);
		const query = {
			pokemon: "pokemon",
		};
		setTimeout(async () => {
			await fetch(`https://pokeapi.co/api/v2/${query.pokemon}/${pokemon}`)
				.then((response) => response.json())
				.then((results) => {
					setPokemon(results);
					setLoading(false);
					console.log(results);
				})
				.catch((error) => {
					console.log(error);
					setLoading(false);
					setError(true);
					setErrorMsg("Pokemon not found");
				});
		}, 1000);
	};
	return (
		<div>
			{error ? <Alert variant="danger">{errorMsg}</Alert> : null}
			<Search getPokemon={getPokemon} />
			<div style={{ textAlign: "center" }}>{loading ? <Spinner animation="border" /> : null}</div>

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
