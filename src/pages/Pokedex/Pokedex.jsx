import React, { useEffect } from "react";
import { observer } from "mobx-react";
import ControlPanel from "../../components/ControlPanel/ControlPanel";
import "./pokedex.scss";
import store from "../../store/store";
import PokeCard from "../../components/PokeCard/PokeCard";
import Pagination from "../../components/Pagination/Pagination";

const Pokedex = observer(() => {
  useEffect(() => {
    store.getPokemons();
  }, []);

  return (
    <div className="pokedex">
      <h1 className="title">Pokedex</h1>
      <ControlPanel />
      <div className="poke-container">
        {store.pokemons.map((elem) => (
          <PokeCard {...elem} key={elem.name} />
        ))}
      </div>
      <Pagination />
    </div>
  );
});
export default Pokedex;
