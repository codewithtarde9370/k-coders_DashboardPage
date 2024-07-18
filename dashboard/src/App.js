import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import DashBoard from './views/home/index'
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar'

function App() {
  return (<div className='body'>
    
  <BrowserRouter>
  <Header/>
  <div className='main d-flex'>
    <div className='sidebarWrapper'>
<Sidebar/>
    </div>
    <div className='content'>
    <Routes>
<Route path="/" exact={true} element={<DashBoard/>}></Route>
</Routes>
    </div>

  </div>

</BrowserRouter> 
  </div>
 );
}

export default App