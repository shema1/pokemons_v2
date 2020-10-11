import React, { useState } from "react";
import "./pokecard.scss";
// import Stats from "../Stats/Stats";
import PropTypes from "prop-types";

const PokeCard = ({ name, id, types, stats }) => {
  let [openWindow, setOpenWindow] = useState(false);
  let cardColor = types ? types[types.length - 1].type.name : 0;

  const hideDetails = () => {
    setOpenWindow(false);
    console.log("ssss");
  };
  const details = () => {
    setOpenWindow(true);
  };

  let active = openWindow ? " active " : "";
  let hide = openWindow ? " " : " hide";
  return (
    <>
      <div className={`overlay ${hide}`} onClick={hideDetails}></div>
      <div className={`pokemon ${cardColor} ${active}`} onClick={details}>
        <div className="img-container">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt="Bulbasaur"
          />
        </div>
        <div className="info">
          <span className="number">#{id}</span>
          <h3 className="name">{name}</h3>
          <small className="type">
            {types &&
              types.map((elem) => (
                <span
                  className={`type__${elem.type.name}`}
                  key={elem.type.name}
                >
                  {elem.type.name}{" "}
                </span>
              ))}
          </small>
          {openWindow && (
            <>
              <ul className="stats">
                {stats.map((elem) => (
                  <li className="stats-elem" key={elem.stat.name}>
                    <span className="stats-elem__name">{elem.stat.name}</span>{" "}
                    <span className="stats-elem__value">{elem.base_stat}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};
PokeCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  types: PropTypes.array,
  stats: PropTypes.array,
};
export default PokeCard;
