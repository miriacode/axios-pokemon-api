import React, { useState, useEffect } from "react";
import axios from 'axios';

const ButtonComponent = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [pokemons, setPokemons] = useState([])

    //BUTTON ------------------------------------------
    const handleSubmit = () =>{
        setIsClicked(!isClicked);
    }

    useEffect(() =>{
        console.log("Getting All Pokemons");
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then (response => {
                setPokemons(response.data.results);
            })
    },[isClicked]);

    return(
        <>
            <button onClick={handleSubmit}>Fetch Pokemon</button>   
            {isClicked && <ul>
                {pokemons.map(pokemon=> <li>{pokemon.name}</li>)}
            </ul>}
        </>
    )
}

export default ButtonComponent;