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
      {/* <Person name='sakib'nayika='Shabnur'></Person>
      <Person name='Jasim'nayika='Shabana'></Person> 
      <Person name='Shakil' nayika='Popi'></Person>      */}

     <Friend phone='0987' address='dhaka'></Friend>
     <Friend phone='1987'address='comilla'></Friend>
     <Friend phone='2987'address='noakhali'></Friend>
     <Friend phone='3987'address='borisal'></Friend>
    </div>
  );
}
function Person(props){
  console.log(props)
  const person={
    backgroundColor:'skyblue',
    border:'3px solid red',
    margin:'20px',
    borderRadius:'10px'

  }
  return (
  <div style={person}>
    <h1>{props.name}</h1>
    <h3>{props.nayika}</h3>
    <h4>Profession:Actor</h4>
  </div>
  )
}
function Friend(props){
  return (
    <div className='person'>
      <h3>Phone:{props.phone}</h3>
      <h5>Address:{props.address} </h5>
    </div>
  )
}
export default App;
