import React,{useEffect, useState} from 'react';
import './App.css';
import Card from './componet/card';
import ThemeContext from './themecontext';
import Box from './componet/box';
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <Card />
        <Box />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
