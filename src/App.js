import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat-component/flat';

const flat =  {
  "id": 145,
  "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
  "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  "price": 164,
  "priceCurrency": "EUR",
  "lat": 48.884211,
  "lng": 2.346890
};

class App extends Component {
  render() {
    return (
      <div>
           <Flat flat={flat}/>      
           <Flat flat={flat}/>      
           <Flat flat={flat}/>      
      </div>
    )
  }
}

export default App;
