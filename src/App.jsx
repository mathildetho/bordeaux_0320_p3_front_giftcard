import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

import Contact from './components/Contact/Contact';
import HomeContainer from './components/Home/HomeContainer';
import Footer from './components/footer/Footer';
import CardsContainer from './components/GiftCardPage/CardsContainer.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomeContainer} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/filteredCards" component={CardsContainer} exact />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
