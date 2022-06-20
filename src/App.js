import logo from './avion-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avion School React Class</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Let's start changing the <code>src/App.js</code>!.
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
