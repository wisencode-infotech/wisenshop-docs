import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // Import the Toaster component
import Home from "./pages/Home"; // Home component path
import "../css/app.css"; // Ensure the CSS file is correctly imported
import { VersioningProvider } from "./utils/VersioningContext"; // Ensure correct import path

const App = () => (
  <VersioningProvider>
    <Router>
      <div>
        {/* Include Toaster globally */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            className: "toastr dark",
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:topicSlug/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </VersioningProvider>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);