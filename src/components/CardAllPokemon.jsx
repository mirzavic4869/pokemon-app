import React, { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

const CardAllPokemon = ({ image, name, type }) => {
	const [detail, setDetail] = useState(false);

	return (
		<Container>
			<ListGroup as="ol">
				<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start gap-2">
					<div className="ms-2 me-auto">
						<div className="fw-bold my-2">{name}</div>
						{detail ? (
							<div>
								<div className="d-flex">
									<img className="d-flex" src={image} width={50} alt={name} />
								</div>
								<p>
									<strong className="fst-italic">Type:</strong> {type}
								</p>
							</div>
						) : null}
					</div>
					<Button onClick={(e) => setDetail(!detail)}>Detail</Button>
				</ListGroup.Item>
			</ListGroup>
		</Container>
	);
};

export default CardAllPokemon;
