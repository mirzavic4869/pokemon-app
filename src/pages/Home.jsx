import React, { useState } from "react";
import Search from "../components/Search";
import { Row, Col } from "react-bootstrap";

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
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<Search getPokemon={getPokemon} />
			{!loading && pokemon ? (
				<Row>
					<Col>
						<p>{pokemon.name}</p>
					</Col>
				</Row>
			) : null}
		</div>
	);
};

export default Home;
