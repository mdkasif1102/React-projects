import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  let foodItems = [];
  // let foodItems = ["dal", "Green vegitable", "Roti", "Salad", "Milk"];
  let emptyMessage = foodItems.length == 0 ? <h3>I am still hungry</h3> : null;
  // for conitonal statement. use redering.
  return (

    <>
      <h1>Healthy Food</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => (<li key={item} className="list-group-item">{item}</li>))}



      </ul>
    </>
  );
}

export default App;