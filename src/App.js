import './App.css';
import Favorits from "./Favorits";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3> Weather Forecast for your city</h3>
        < Favorits city="Rome" />
        < Favorits city="Paris" />
        < Favorits city="Berlin" />
        < Favorits city="New York" />
        < Search />
      </header>
    </div>
  );
}

export default App;
