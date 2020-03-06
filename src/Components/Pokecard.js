import React, {Component} from 'react';
import './Pokecard.css' 

/// Api for Pokemons 
const POKER_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// api uses 3 digit number so it addes two 00 if number is  999 like 2 becomes 002
let padtothree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);



class Pokecard extends Component {   // Card of pokemon conatins data of pokemon
 render() {
  const pros = this.props;   // local veriable

  let imgSrc = `${POKER_API}${padtothree(this.props.id)}.png`;   /// setting up img address
  
  return (
  
    <div className="Pokecard">
      <h1 className="Pokecard-title">  {/* Setting up title */}  
        {pros.name}
      </h1>
      <div className="Pokecard-img">   {/* Setting up Image */}
        <img src={imgSrc} alt={pros.name} />
      </div>
        
      <div className="Pokecard-data">
        Type: {pros.type}
      </div>
    </div>
  );
 }
}


export default Pokecard;