import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from '../Components/Pokecard';

class Pokedex extends Component {    /// Class contains Pokecard

 render() {
   
  ///  local veriables for props
  let pokemons = this.props.Pokemon;
  let nfes = this.props.nfes; /// it deceids the winner (no of nfs (true) greater that will be winner)
  let iswin = this.props.isWin;
  let title;
  
  //  Checks the winner
  if(iswin) {
    title = <h1 className="Pokedex-winner">Winning Hand</h1>
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand</h1>
  }

  return (
   <div className="Pokedex">
    {title}                         {/* Title for winning or losing */}
    <h4>Total Nfe's : {nfes} </h4>   {/* Winning or losing score  */}
    
    <div className="Pokedex-cards"> 
    {/* extract id , name , type from pokemons api and sending it to Pokecard */} 
     {pokemons.map((p) =>   
      <Pokecard id={p.id} name={p.name} type={p.type} />
     )}
    </div>
   </div>
  );
 
 
 }
};

export default Pokedex;