import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { DataProvider } from "./Context";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
