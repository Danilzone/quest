import { Route, Routes } from "react-router-dom";
import { Lapshov, Leading, NoFound, Sevastyanov, Makarenkov, Tipanov, Zaika, VideoReport } from "../../pages";

import "../../shared/styles/styles.scss";
import "../../shared/styles/adapt.scss";

function App() {
  console.log("Succses!");

  return (
    <Routes>

        <Route exact path="/" element={<Leading />} /> {/* Эта страничка по умолчанию */}
        <Route exact path="/video-report" element={<VideoReport />} /> 

        <Route exact path="/Lapshov" element={<Lapshov />} /> 
        <Route exact path="/Sevastyanov" element={<Sevastyanov />} /> 
        <Route exact path="/Makarenkov" element={<Makarenkov />} />
        <Route exact path="/Tipanov" element={<Tipanov />} /> 
        <Route exact path="/Zaika" element={<Zaika />} /> 


        <Route exact path="*" element={<NoFound />} /> {/* Эта страничка 404 */}

    </Routes>        
  );
}

export default App;