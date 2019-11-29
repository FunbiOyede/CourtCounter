import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Routers/Router";
function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
