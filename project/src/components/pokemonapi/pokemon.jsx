import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pokemonapi = () => {
  const [pokemonnaam, setpokemon] = useState("");
  const [value, setvalue] = useState("");

  const pokemon = (value) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + value).then((data) => {
      setpokemon(data.data);
      console.log(data.data);
    });
  };

  return (
    <div className="app">
      <div></div>

      <>
        <from>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          ></input>
        </from>
        <button onClick={() => pokemon(value)}> new pokemon</button>
        <img src={pokemonnaam?.sprites?.front_shiny}></img>
        <img src={pokemonnaam?.sprites?.back_shiny}></img>
        <img src={pokemonnaam?.sprites?.front_default}></img>
        <img src={pokemonnaam?.sprites?.back_default}></img>
        <img
          src={pokemonnaam?.sprites?.other?.["official-artwork"].front_default}
        ></img>
      </>
    </div>
  );
};

export default Pokemonapi;
