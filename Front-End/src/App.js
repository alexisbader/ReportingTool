import "./App.css";
import Header from "./Components/Decorations/Header";
import Generate from "./Components/Actions/GenerateButton";
import Client from "./Components/Actions/ClientSelector";
import RenderingSelection from "./Components/Cards/RenderCard";
import FilterCard from "./Components/Cards/FilterCard";
import CSVButton from "./Components/Actions/CSVButton";

function App() {

  return (
    <div className="App">
      <div className="header-components">
        <Header />
        <Client />
      </div>

      <div id="report">
        <div className="main">
          <FilterCard />
          <RenderingSelection />
        </div>
        <Generate />
      </div>

      <div>
        <CSVButton/>
      </div>
    </div>
  );
}

export default App;
