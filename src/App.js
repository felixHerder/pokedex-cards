import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';
import { Loader } from './components/loader/loader.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      pokecards: [],
      searchBox: '',
      loading: true,
      progress: 0,
      currentPokemon: ''
    }
    this.searchBoxChange = this.searchBoxChange.bind(this);
    this.selectChange = this.selectChange.bind(this)
  }

  render() {
    return (
      <div className="App">
        <SearchBox searchBoxChange={this.searchBoxChange}
          selectChange={this.selectChange}
          loading={this.state.loading}
          currentPokemon={this.state.currentPokemon}
          progress={this.state.progress}
        />
        <Loader loading={this.state.loading} />
        <CardList pokecards={this.state.pokecards} searchBox={this.state.searchBox} />
        <footer><a href="https://felixherder.space">felixherder.space</a>
          Pokémon and Pokémon character names are trademarks of Nintendo.</footer>
      </div>
    );
  }

  //load gen 1 on startup from cache or api
  componentDidMount() {
    this.loadPokeGen(0);

  }

  searchBoxChange(e) {
    this.setState({ searchBox: e.target.value });
  }

  selectChange(e) {
    this.setState({ pokecards: [] });
    this.setState({ loading: true });
    this.loadPokeGen(parseInt(e.target.value));
  }

  loadPokeGen(gen) {
    const genArr = [[151, 0], [100, 151], [135, 251], [107, 386], [156, 493], [72, 649], [88, 721], [89, 809]];
    //check for local storage cache
    const pokedata = localStorage.getItem('pokedata-gen' + gen);
    if (pokedata) {
      this.setState({ pokecards: JSON.parse(pokedata) });
      console.log('data loaded from storage');
      this.setState({ loading: false });
    } else { //load data from api and cache in storage
      this.getPokeData(genArr[gen][0], genArr[gen][1])
        .then(data => {
          this.setState({ pokecards: data },
            () => localStorage.setItem('pokedata-gen' + gen, JSON.stringify(this.state.pokecards)));
          this.setState({ loading: false, progress: 0, currentPokemon: '' });
        });
      console.log('data loaded from api');
    }
  }

  //get data from api
  async getPokeData(count, offset) {
    //fetch list of pokemon
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=${offset}`);
    const data = await resp.json();
    //fetch filtered data for each pokemon
    const processed = data.results.map(async (result, i) => {
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
      //show progress
      this.setState((prevState,prevProps)=>({ currentPokemon: d.name, progress: prevState.progress + ((100 / count) * 1) }));
      return {
        name: d.name,
        id: d.id,
        weight: d.weight,
        height: d.height,
        hp: d.stats[0].base_stat,
        img: d.sprites.other.dream_world.front_default ? d.sprites.other.dream_world.front_default :
          d.sprites.other['official-artwork'].front_default,
        types: d.types.map(v => v.type.name),
        abilities: a
      };
    });
    return Promise.all(processed);
  }
}
export default App;

