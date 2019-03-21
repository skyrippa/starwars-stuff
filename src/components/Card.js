import React from 'react';

const Card = ({ name, birth_year, gender, height, mass, species, homeworld }) => {
	return (
		<div className='ct dib bw2 ma2 mw5 br3 pa3 pa4-ns ba b--black-10 grow bg-white shadow-3 db w-100 h-100' >
			<div>
				<h2>{name}</h2>
				<hr className="mw3 bb bw1 b--black-10"/>
				<p>Specie: {species}</p>
				<p>Homeworld: {homeworld}</p>
				<p>Birth Year: {birth_year}</p>
				<p>Gender: {gender}</p>
				<p>Height: {height}</p>
				<p>Mass: {mass}</p>
			</div>
		</div>
	);
}

export default Card;