import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

const CardAllPokemon = (props) => {
	return (
		<Container>
			<ListGroup as="ol">
				<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
					<div className="ms-2 me-auto">
						<div className="fw-bold">{props.name}</div>
					</div>
					<Button>Detail</Button>
				</ListGroup.Item>
			</ListGroup>
		</Container>
	);
};

export default CardAllPokemon;
