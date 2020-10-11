import React, { useState } from "react";
import PropTypes from "prop-types";
import store from "../../store/store";

const ControlPanel = () => {
  const [activeButton, setActiveButton] = useState(10);

  const buttonHandler = (value) => {
    store.changeCardQuantity(value);
    setActiveButton(value);
  };
  return (
    <div className="control-panel">
      <div className="control-panel__sort">
        <span>sort by:</span>
        <button onClick={() => store.sortBy("name")}>name</button>
        <button onClick={() => store.sortBy("types")}>type</button>
        <button onClick={() => store.sortBy("id")}>number</button>
      </div>

      <div className="control-panel__sort">
        <input
          placeholder="What are you looking for?"
          onChange={(e) => store.findPokemon(e.target.value)}
        />
      </div>
      <div className="control-panel__pagination">
        <span>Card on page: </span>
        <button
          className={activeButton === 10 ? "active-btn" : ""}
          onClick={() => buttonHandler(10)}
        >
          10
        </button>
        <button
          className={activeButton === 20 ? "active-btn" : ""}
          onClick={() => buttonHandler(20)}
        >
          20
        </button>
        <button
          className={activeButton === 50 ? "active-btn" : ""}
          onClick={() => buttonHandler(50)}
        >
          50
        </button>
      </div>
    </div>
  );
};


export default ControlPanel;
