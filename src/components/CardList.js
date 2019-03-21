import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
	return (
		<div>
		{
			characters.map((character,i) => {
				return (
					<Card 
						key = {i}
						name = {characters[i].name}
						birth_year = {characters[i].birth_year}
						gender = {characters[i].gender}
						height={characters[i].height}
						mass={characters[i].mass}
						species={characters[i].species}
						homeworld={characters[i].homeworld}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;