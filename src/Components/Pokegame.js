/* eslint-disable no-unused-vars */
import React, {Component} from 'react';

import Pokedex from '../Components/Pokedex';
import './Pokegame.css';
import {Pokedex_array} from './Pokedex_array';  

class Pokegame extends Component { /// game 
 render() {
  
  let pokemon = Pokedex_array;  /// arrray of Pokemons
  let hand1 = [];               
  let hand2 = Pokedex_array;

 while(hand1.length < hand2.length)   /// Logic is 2 arrays with randomly different Pokemons 
 {
  let randidx = Math.floor(Math.random() * hand2.length);
  let randpokemon = hand2.splice(randidx, 1)[0];
  hand1.push(randpokemon);
 }

 let isNfe1 = 0;
 let isNfe2 = 0;
 // Whic Pokemon's Nfe score is high will be winner
 isNfe1 = hand1.reduce((isnfe,pokemon) =>(pokemon.isNfe ? isNfe1++ : isNfe1),0); 
 isNfe2 = hand2.reduce((isnfe,pokemon) => (pokemon.isNfe ? isNfe2++ : isNfe2),0);

 return (
  // Used two Pokemon arrays and comare them to choice the winner
  <div>
   <Pokedex Pokemon={hand1} nfes ={isNfe1} isWin={isNfe1 > isNfe2}/>
   <Pokedex Pokemon={hand2} nfes ={isNfe2} isWin={isNfe2 > isNfe1}
   />
  </div>
  );
 }
};

export default Pokegame;