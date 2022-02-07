import Navbar from "./components/Navbar";
import CardTour from "./components/CardTour";
import seperate from "./seperate";

function App() {

  const cards = seperate.map (item => {
    return (
      <CardTour 
      item = {item}
      />
    )
  })


  return (
    <div className="App">
      <Navbar/>
      <section className="card_section">
        {cards}
      </section>
    </div>
  );
}

export default App;
