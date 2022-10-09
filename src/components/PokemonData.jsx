import React from "react";
import { Container, Col, Row, Card, ProgressBar } from "react-bootstrap";

const PokemonData = (props) => {
	return (
		<Container className="mt-2">
			<Row>
				<Col xs={12} md={6}>
					<Card>
						<Card.Header>
							<h3>{props.name}</h3>
							<img src={props.sprite} alt={props.name} />
						</Card.Header>
						<Card.Body>
							<h5 className="fst-italic">Abilities</h5>
							{props.abilities.map((ability, key) => (
								<div className="mb-2" key={key}>
									<span>{ability.ability.name}</span>
								</div>
							))}
							<h5 className="fst-italic">Height</h5>
							{props.height}

							<h5 className="fst-italic">Species</h5>
							{props.species}
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={6}>
					<Card>
						<Card.Body>
							<h5>Base Stats</h5>
							{props.stats.map((stat, key) => (
								<div className="mb-1" key={key}>
									<strong className="fst-italic">{stat.stat.name}</strong>
									<ProgressBar now={stat.base_stat} max={250} label={stat.base_stat} />
								</div>
							))}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default PokemonData;
