import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App';
import ComponentNotfoundPage from './Components/ComponentNotfoundPage'
import CardPage from './Components/CardPage'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>  
        <Route path='/Movie-App-React' element={<App />} />
        <Route path='/card/:MovieID' element={<CardPage />}/>
        <Route path='*' element={<ComponentNotfoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);