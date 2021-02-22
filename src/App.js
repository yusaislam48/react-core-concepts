import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar', 'Jafor', 'Alomgir', 'Salman Sah', 'Sonil'];
  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    {name: 'Illustrator', price: '$70.99'},
    {name: 'PDF', price: '$9.99'}
];
  let person = {
    name: "Dr. Mahfuz",
    job: "Singer"
  }
  let style ={
    color: "red",
    backgroundColor: "yellow"
  }

  const nayoksName = nayoks.map(nayok => nayok);
  const productsNames = products.map(product => product.name);
  // console.log(nayoksName);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        <h1 className= "" style={style}>Name: {person.name + '   |  ' + person.job}</h1>
        
        {/* <Person name={nayoks[0]} nayika="Mousumi"></Person> */}

        {
          products.map(product => <Product product={product}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {
          nayoks.map(name => <Person name={name}></Person>)
        }
        {/* <Person name="Yusa Islam"></Person>
        <Person name="Aslam"></Person>
        <Person name="Faslam"></Person> */}
      </header>
    </div>
  );
}

// data load from api
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

// counter section
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleDecrease}>Decrease!</button>
      <button onClick={handleIncrease}>Increase!</button>
    </div>
  )
}

// Products Section
function Product(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "250px",
    width: "250px",
    float: "left"
  }
  const {name, price} = props.product;
  return(
    <div style= {productStyle}>
      <h4>Name: {name}</h4>
      <h5>Price: {props.product.price}</h5>
      <button>Buy Now!</button>
    </div>
  )
}

// Person Name Section
function Person(props){
  // console.log(props);
  return (
  <div style={{border: '2px solid yellow', margin:  '10px', padding: '5px'}}>
    <h1>Name : {props.name}</h1>
    <p>Hero of {props.nayika}</p>
  </div>
  )
}

export default App;
