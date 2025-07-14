import React, { useState } from "react";
import ShoppingList from "./ShoppingList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App light";

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={appClass} data-testid="app-container">
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
