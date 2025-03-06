import Sam from "./Pages/Portfolios/Sam/Sam";
import Emily from "./Pages/Portfolios/Emily/Emily";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Updates from "./Pages/Updates/Updates";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Sam" element={<Sam />} />
          <Route path="Emily" element={<Emily />} />
          <Route path="Updates" element={<Updates />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
