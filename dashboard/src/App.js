import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import DashBoard from './views/home/index'
import Header from './components/header/header';

function App() {
  return (
  <BrowserRouter>
  <Header/>
<Routes>
<Route path="/" exact={true} element={<DashBoard/>}></Route>
</Routes>
</BrowserRouter> 
 );
}

export default App