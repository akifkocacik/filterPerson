import { Routes, Route } from "react-router-dom";
import FilterPersonPage from "./pages/FilterPersonPage";
import NextPersonPage from "./pages/NextPersonPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FilterPersonPage />} />
      <Route path="/nextperson" element={<NextPersonPage />} />
    </Routes>
  );
};

export default App;
