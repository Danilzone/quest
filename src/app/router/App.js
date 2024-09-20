import { Route, Routes } from "react-router-dom";
import { Leading } from "../../pages";
function App() {
  console.log("Succses!");

  return (
    <Routes>
        <Route exact path="/" element={<Leading />} />
    </Routes>        
  );
}

export default App;