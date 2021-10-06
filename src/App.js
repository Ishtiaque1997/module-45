import logo from './logo.svg';
import './App.css';

function App() {
  // const number=555;
  // const singer={
  //   name:'Dr. Mahfuz',
  //   profession:'singer'
  // }
  // const singer2={
  //   name:'eva rahman',
  //   job:'kokila'
  // }
  //using style as object
  // const singerStyle={
  //   backgroundColor:'green',
  //   padding:'10px'
  // }
  //3 ways to use style
  //1. externally 2. accessing as an object 3. internally with double curly braces
  return (
    <div className="App">
      <Person/>
      <Person/> 
       <Person/>
      <Person/> 
       <Person/>
      <Person/>      
    </div>
  );
}
function Person(){
  const person={
    backgroundColor:'skyblue',
    border:'3px solid red',
    margin:'20px',
    borderRadius:'20px'

  }
  return (
  <div style={{backgroundColor:'skyblue',
    border:'3px solid red',
    margin:'20px',
    borderRadius:'20px'}}>
    <h1>Sakib Al Hasan</h1>
    <h4>Profession:Cricketer</h4>
  </div>
  )
}

export default App;
