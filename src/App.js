import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokecards: [],
      loading: true
    }
  }

  render() {
    return (
      <div className="App">
        <CardList pokecards={this.state.pokecards} />
      </div>
    );
  }
  componentDidMount() {
    //cache to local storage
    if (localStorage.getItem('pokedata')) {
      this.setState({ pokecards: JSON.parse(localStorage.getItem('pokedata')) });
      console.log('data loaded from storage');
    } else {
      this.getPokeData(151)
        .then(data => this.setState({ pokecards: data },
          () => localStorage.setItem('pokedata', JSON.stringify(this.state.pokecards))));
      console.log('data loaded from api');
    }
  }
  async getPokeData(count) {
    //fetch list of pokemon
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
    const data = await resp.json();
    //fetch filtered data for each pokemon
    const processed = data.results.map(async result => {
      const r = await fetch(result.url);
      const d = await r.json();
      //fetch abilities effects
      const abilities = d.abilities.map(async ability => {
        try {
          const r = await fetch(ability.ability.url);
          const d = await r.json();
          const effect = d.flavor_text_entries.find(v => v.language.name === 'en');
          return {
            name: d.name,
            effect: effect.flavor_text
          }
        } catch (error) {
          console.log(error);
        }
      });
      const a = await Promise.all(abilities);
      return {
        name: d.name,
        id: d.id,
        weight: d.weight,
        height: d.height,
        img: d.sprites.other.dream_world.front_default,
        types: d.types.map(v => v.type.name),
        abilities: a
      };
    });
    return Promise.all(processed);
  }
}
export default App;

