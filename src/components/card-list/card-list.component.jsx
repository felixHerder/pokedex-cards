import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList = (props) => (

		<div className="card-list">
			{
				props.pokecards.map(value => 
				<Card key={value.id} pokemon={value}/>)
			}
		</div>

);
