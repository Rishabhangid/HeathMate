import React from 'react';
// Imported for Navigation
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importing Styling Sheets
import './App.css';
// Importing For Tailwind CSS
import "../src/output.css"
// Importing Different Components
import HomePage from './Component/HomePage';
import BMICalculator from './Component/BMICalculator';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Exercise from './Component/Exersice';

const App = () => {
    return (
        <div className="App">

            {/* Defining Routing  */}
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/calculate-bmi" element={<BMICalculator />} />
                    <Route path="/exercise" element={<Exercise />} />
                </Routes>
                <Footer></Footer>
            </Router>

        </div>
    );
};

export default App;


