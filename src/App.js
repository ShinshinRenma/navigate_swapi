import './App.css';
import React from 'react';
import Display from './components/Display';
import Form from './components/Form';

import { Routes, Route } from 'react-router-dom';

function App() {
    
    

    return (

        <div className="App">
            <h1>Star Wars API Walker</h1>
            <Form />
            <Routes>
                <Route path="/:category/:number" element={<Display />}/>
            </Routes>
        </div>
        
  );
}

export default App;
