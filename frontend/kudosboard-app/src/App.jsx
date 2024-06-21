import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import React from "react";
import CardPage from "./components/CardPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/boards"
          element={
            <>
              <div className="AppHeader">
                <Header />
              </div>
              <div className="AppBody">
                <Dashboard />
              </div>
              <div className="AppFooter">
                <Footer />
              </div>
            </>
          }
        />
        <Route
          path="/boards/:id"
          element={
            <>
              <Header /> <CardPage /> <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
