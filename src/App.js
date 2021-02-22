import logo from './logo.svg';
import './App.css';

function App() {
  let person = {
    name: "Dr. Mahfuz",
    job: "Singer"
  }
  let style ={
    color: "red",
    backgroundColor: "yellow"
  }
  return (
    <div className="App">
      <header className="App-header">

        <h1 className= "" style={style}>Name: {person.name + '   |  ' + person.job}</h1>
        <h4>{person.job}</h4>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  return (
  <div style={{border: '2px solid yellow', margin:  '10px', padding: '5px'}}>
    <h1>Name : Sakib</h1>
    <p>I am hero!</p>
  </div>
  )
}

export default App;
