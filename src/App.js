import logo from './logo.svg';
import './App.css';

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
