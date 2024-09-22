import { Route, Routes } from "react-router-dom";
import { Leading, NoFound } from "../../pages";

import "../../shared/styles/styles.scss";
import "../../shared/styles/adapt.scss";

function App() {
  console.log("Succses!");

  return (
    <Routes>

        <Route exact path="/" element={<Leading />} /> {/* Эта страничка по умолчанию */}


        <Route exact path="*" element={<NoFound />} /> {/* Эта страничка 404 */}

    </Routes>        
  );
}

export default App;