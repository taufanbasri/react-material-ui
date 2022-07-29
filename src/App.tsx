import "./App.css";
import MuiBadge from "./components/MuiBadge";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiNavbar from "./components/MuiNavbar";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiBadge />
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
