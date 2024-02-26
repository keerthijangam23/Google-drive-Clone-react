import Dashboard from "./Dashboard";
import SearchBar from "./search";
export default function Main() {
  return (
    <div>
      <SearchBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}
