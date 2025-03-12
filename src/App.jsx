import "./App.css";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Learning from "./pages/Learning";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Landing />} path="/"/>
        <Route element={<Jobs/>} path="/jobs"/>
        <Route element={<Learning/>} path="/learning"/>
        <Route element={<Events/>} path="/event"/>
      </Routes>
    </>
  );
}

export default App;
