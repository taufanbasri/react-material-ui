import "./App.css";

import MuiNavbar from "./components/MuiNavbar";
import MuiSkeleton from "./components/MuiSkeleton";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiSkeleton />
    </div>
  );
}

export default App;
