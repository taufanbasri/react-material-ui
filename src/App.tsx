import "./App.css";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiList from "./components/MuiList";
import MuiNavbar from "./components/MuiNavbar";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiList />
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
