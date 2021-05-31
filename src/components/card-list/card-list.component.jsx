import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList = (props) => (

		<div className="card-list">
			{
				props.pokecards
				.filter(value=>value.name.includes(props.searchBox)
				|| value.types.find(t=>t.includes(props.searchBox))
				|| value.abilities.find(a=>a.name.includes(props.searchBox))
				)
				.map(value => 
				<Card key={value.id} pokemon={value}/>)
			}
		</div>

);
