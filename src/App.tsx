import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <main className='container'>
        <img
          className='logo'
          src={logoImg}
          alt='Logo da calculadora de gasolina ou etanol'></img>
      </main>
      <h1 className='title'> Qual melhor opção?</h1>

      <form className='form'>
        <label>Etanol (preço por litro):</label>
        <input
          className='input'
          type='number'
          placeholder='4,90'
          min='1'
          step='0.01'
          required
        />
        <label>Gasolina (preço por litro):</label>
        <input
          className='input'
          type='number'
          placeholder='4,90'
          min='1'
          step='0.01'
          required
        />

        <input type='submit' className='button' value='Calcular' />
      </form>
    </div>
  );
}

export default App;
