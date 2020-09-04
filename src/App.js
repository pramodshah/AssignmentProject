import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import FormTest from './components/FormTest';
import View from './components/View';


function App() {
    
  
  return (
    <BrowserRouter>
      <div className="App">
      
        <FormTest />
        <Route path="/view">
        <View />
      </Route>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
