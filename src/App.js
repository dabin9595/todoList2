import Say from "./components/Say";
import Counter from "./components/Counter";
import Id from "./components/Id";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Say />
      <div>
        <Id />
        <Counter />
      </div>
    </div>
  );
}

export default App;
