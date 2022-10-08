import React, { useState } from "react";
import { Form, Container, Col, Button, Row } from "react-bootstrap";

const Search = (props) => {
	const [search, setSearch] = useState("");
	return (
		<Container>
			<Form className="mt-2">
				<Row className="align-items-center">
					<Col sm={10} className="my-1">
						<Form.Control onChange={(e) => setSearch(e.target.value)} placeholder="Search for pokemon" />
					</Col>
					<Col sm={2} className="my-1">
						<Button onClick={(e) => props.getPokemon(search)}>Search</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

export default Search;
