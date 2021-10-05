import logo from './logo.svg';
import './App.css';

function App() {
  const number=555;
  const singer={
    name:'Dr. Mahfuz',
    profession:'singer'
  }
  const singer2={
    name:'eva rahman',
    job:'kokila'
  }
  //using style as object
  const singerStyle={
    backgroundColor:'green',
    padding:'10px'
  }
  //3 ays to use style
  //1. externally 2. accessing as an object 3. internally with double curly braces
  return (
    <div className="App">
      <header className="App-header">
      <h3>React starting</h3>
      <p>Happy with react</p>
      <div className='container'>
        <h3>Ths is inside the container</h3>
        <p>My number is {number}</p>
        <p style={{color:'red'}}>Singer:{singer.name}</p>
        <p>Job:{singer.profession}</p>
        <p style={singerStyle}>Real singer: {singer2.name}</p>
      </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
