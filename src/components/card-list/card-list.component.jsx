import './card-list.style.css';
import {Card} from '../card/card.component';

export const CardList = (props) => (

		<div className="card-list">
			{
				props.pokecards
				.filter(value=>value.name.includes(props.searchBox.toLowerCase())
				|| value.types.find(t=>t.includes(props.searchBox.toLowerCase()))
				|| value.abilities.find(a=>a.name.includes(props.searchBox.toLowerCase()))
				)
				.map(value => 
				<Card key={value.id} pokemon={value}/>)
			}
		</div>

);
