import "./App.css";
import MuiAvatar from "./components/MuiAvatar";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiNavbar from "./components/MuiNavbar";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiAvatar />
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
