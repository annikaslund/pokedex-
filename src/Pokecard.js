import React, { Component } from 'react';

class Pokecard extends Component {
    

    render(){
        let { name, id, type, base_experience } = this.props;
        let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return (
            <div>
                <p>{ name }</p>
                <img src={imgURL} className="pokemon-image" alt="pokemon"/>
                <p>Type: { type }</p>
                <p>EXP: { base_experience }</p>
            </div>
        );
    }
}

export default Pokecard;