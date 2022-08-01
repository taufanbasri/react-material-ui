import "./App.css";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiNavbar from "./components/MuiNavbar";
import MuiTooltip from "./components/MuiTooltip";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiTooltip />
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
