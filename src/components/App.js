import logo from '../images/betha.svg';
import '../css/App.css';
import Tabla from 'betha_tabla';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>La forma más sencilla de consumir un <code>API</code> y ahorrar tiempo de programación.</p>
        <a className="App-link" href="https://github.com/ferbethasistemas/test-app-tabla" rel="noopener noreferrer">
          Descargue el Test Betha-Tabla
        </a>
        <p className="App-link" href="https://github.com/ferbethasistemas/test-app-tabla" rel="noopener noreferrer">Ejecute:</p>
        <p>npm install betha-tabla</p>
        <p className="App-link" href="https://github.com/ferbethasistemas/test-app-tabla" rel="noopener noreferrer">import Tabla from 'beta_tabla'</p>
        <p>{"<Tabla />"}</p>
        <center><Tabla /></center>
      </header>

    </div>
  );
}

export default App;
