import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  (async()=>{
    let data = await fetch("http://localhost/api/hello/fer");

    console.log(data);
  })()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Deu certo Princesa!
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          New React
        </a>
        
      </header>
    </div>
  );
}

export default App;
