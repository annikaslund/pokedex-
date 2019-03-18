import React, { Component } from 'react';
import "./Pokecard.css"
class Pokecard extends Component {
    render(){
        let { name, id, type, base_experience } = this.props;
        let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <div className="Pokecard">
                <h5>{ name }</h5>
                <img src={imgURL} className="pokemon-image" alt="pokemon"/>
                <p>Type: { type }</p>
                <p>EXP: { base_experience }</p>
            </div>
        );
    }
}

export default Pokecard;