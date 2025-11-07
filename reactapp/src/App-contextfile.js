import React,{useEffect, useState} from 'react';
import './App.css';
import Card from './componet/card';
import ThemeContext from './themecontext';
import Box from './componet/box';
import InputFocusExample from './componet/InputFocusExample';

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">

<InputFocusExample />

      {/* <ThemeContext.Provider value={theme}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle Theme
        </button>
        <Card />
        <Box />
      </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
