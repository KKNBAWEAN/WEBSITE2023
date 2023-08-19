import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wisata from './components/pages/Wisata';
import Produk from './components/pages/Produk';
import Blog from './components/pages/Blog';
import WisataDetail from './components/pages/WisataDetail';
import ProductDetail from './components/pages/ProductDetail';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/wisata' exact component={Wisata} />
          <Route path='/produk' exact component={Produk} />
          <Route path='/blog' component={Blog} />
          <Route path='/wisata/:id' component={WisataDetail}/>
          <Route path='/produk/:id' component={ProductDetail}/>
           {/* <Route path='/sign-up' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
