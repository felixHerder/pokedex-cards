import React, { useState } from 'react';
import './searchbox.style.css'
import pokedex from './pokedex_logo.webp';

export const SearchBox = (props) => {
  const [gen, setGen] = useState(0);
  return (
    <nav>
      <img src={pokedex} alt="Pokedex logo" className="pokedex" />
      <div className="loading-bar" style={{ width: props.progress + "%" }}>
            </div>
      {
        props.loading ?
          <div className="loading-container">
            <p>Loading and caching data from pokeapi.co.
        <strong>{props.currentPokemon ? " Fetching: " + props.currentPokemon : ''}</strong>
            </p>
          </div>
          :
          <div className="nav-container">
            <select value={gen} onChange={(e) => {
              props.selectChange(e);
              setGen(e.target.value);
            }} name="Generations">
              <option value="0">Gen I</option>
              <option value="1">Gen II</option>
              <option value="2">Gen III</option>
              <option value="3">Gen IV</option>
              <option value="4">Gen V</option>
              <option value="5">Gen VI</option>
              <option value="6">Gen VII</option>
              <option value="7">Gen VIII</option>
            </select>
            <input type="search" placeholder="Search Cards by Name, Type or Ability"
              onChange={props.searchBoxChange} />
          </div>
      }


    </nav>
  )
}