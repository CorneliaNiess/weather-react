import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Weather />
        <Search temperature={19} />
      </header>
    </div>
  );
}

export default App;
