import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import '../css/app.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:topicSlug/*" element={<Home />} />
        </Routes>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <App />
        </PrimeReactProvider>
    </React.StrictMode>
);
