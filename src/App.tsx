import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main className='container'>
        <img
          src={logoImg}
          alt='Logo da calculadora de gasolina ou etanol'></img>
      </main>
    </div>
  );
}

export default App;
