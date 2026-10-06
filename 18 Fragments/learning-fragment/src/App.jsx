
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let foodItems = ["dal", "Green vegitable", "Roti", "Salad", "Milk"]; // by using map method.
  //<>short form of fragmentation.</> 
  //<React.Fragment> long form of fragmentation.</React.Fragment> 
  return (

    <>
      <h1>Healthy Food</h1>

      <ul className="list-group">
        {foodItems.map((item) => (<li key={item} className="list-group-item">{item}</li>))}

        <li className="list-group-item">Green vegitable</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Daal</li>
        <li className="list-group-item">Milk</li>

      </ul>
    </>
  );
}

export default App;
