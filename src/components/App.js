import React from "react";
import { useState} from "react"
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const[darkMode, setDarkMode] = useState(false)

  function handleButtonClick() {
    setDarkMode((darkMode) => !darkMode)
  }

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleButtonClick} >{darkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
