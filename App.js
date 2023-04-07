import React, { Component } from 'react';
import SoapList from './SoapList';
import FoodList from './FoodList';
import HOC from './HOC';


const SoapsData = [
  {
      id: 1,
      name: 'Pears',
      price: 35
        
  },
  {
      id: 2,
      name: 'Dove',
      price: 45
  },
  {
      id: 3,
      name: 'Hamam',
      price: 30
  }
];
const FoodsData = [
  {
      id: 1,
      name: 'Lays',
      price: 10
        
  },
  {
      id: 2,
      name: 'Bingo',
      price: 15
  },
  {
      id: 3,
      name: 'Doritos',
      price: 30
  }
];

const Soaps = HOC(
  SoapList,
  SoapsData
);

const Foods = HOC(
  FoodList,
  FoodsData
);


class App extends Component {
  render() {
    return (
      <div>
        <Soaps></Soaps>
        <Foods></Foods>
      </div>
    )
  }
}

export default App
