import Dashboard from "./Dashboard"
import SearchBar from "./search";
import "./style.css";

function App() {
  return (
    <div>
      <SearchBar/>
      <div className="container">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
