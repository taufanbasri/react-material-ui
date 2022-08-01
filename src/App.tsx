import "./App.css";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiNavbar from "./components/MuiNavbar";
import MuiTable from "./components/MuiTable";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiTable />
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
