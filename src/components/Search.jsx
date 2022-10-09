import React, { useState } from "react";
import { Form, Container, Col, Button, Row } from "react-bootstrap";
import pokemon from "../assets/pokemon-logo.png";

const Search = (props) => {
	const [search, setSearch] = useState("");
	return (
		<Container>
			<div className="d-flex justify-content-center p-3">
				<img src={pokemon} width={200} alt="hero" />
			</div>
			<Form className="mt-2">
				<Row className="align-items-center d-flex">
					<Col lg={10} className="my-2">
						<Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search for pokemon" />
					</Col>
					<Col lg={2} className="my-2">
						<div className="d-grid">
							<Button onClick={(e) => props.getPokemon(search)}>Search</Button>
						</div>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default Search;
