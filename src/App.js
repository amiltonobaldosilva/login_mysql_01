import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mercado Imenso. Imenso porque é imenso!
        </p>
        <a
          className="App-link"
          href="https://mercadoimenso.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nossa Loja
        </a>
      </header>
    </div>
  );
}

export default App;
