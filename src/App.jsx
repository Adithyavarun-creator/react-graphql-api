import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Title from "./components/Title/Title";
import SingleCard from "./components/SingleCard/SingleCard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Title />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/character/:id" element={<SingleCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
