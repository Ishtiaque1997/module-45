import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const nayoks=['Rubel','Jasim','Shakil','Shuvo']
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

  const cinemas=[
    {nayok:'sani',nayika:'mousumi'},
    {nayok:'rubrl',nayika:'sgabnur'},
    {nayok:'razzak',nayika:'sabana'},
    {nayok:'razu',nayika:'saba'}
  ]
  return (
    <div className="App">
     <Counter></Counter>
      {/* mapping a simple array */}
      {/* <ul>
        {
          nayoks.map(nayok=><li>{nayok}</li>)
        }
      </ul> */}

      {/* mapping an array of objects */}
      {
        cinemas.map(cinema=><Cinema nayok={cinema.nayok}nayika={cinema.nayika}></Cinema>)
      }
      
      {/* display element in a component from an array */}
      <Person name={nayoks[0]}nayika='Shabnur'></Person>
      <Person name={nayoks[1]}nayika='Shabana'></Person> 
      <Person name={nayoks[2]} nayika='Popi'></Person>     
      
      {/* display hard coded elements in a component */}
     <Friend phone='0987' address='dhaka'></Friend>
     <Friend phone='1987'address='comilla'></Friend>
     <Friend phone='2987'address='noakhali'></Friend>
     <Friend phone='3987'address='borisal'></Friend>
    </div>
  );
}

//declaring person component
function Person(props){
  console.log(props)
  
  //style for person
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

//function to demonstrate counter
function Counter(){
  const[count,setCount]=useState(0);
  const handleIncrease=()=>setCount(count+1);
  const handleDecrease=()=>setCount(count-1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
function Cinema(props){
  return(
    <div className='person'>
      <h2>nayok:{props.nayok}</h2>
      <h4>nayika:{props.nayika}</h4>
    </div>
  )
}


function Friend(props){
  return(
    <div className='person'>
      <h3>{props.phone}</h3>
      <h6>{props.address}</h6>
    </div>
  )
}
export default App;
