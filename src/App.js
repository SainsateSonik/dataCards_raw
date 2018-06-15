import React, { Component } from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Dashboard } from './Dashboard/Dashboard';
import { InputPlate } from './InputPlate/InputPlate';

class App extends Component {
  state = {
    data : [],
    toggleViewStat: false,
    buttonLabel: 'Add'
  }

  toggleViewHandler = () => {
    let toggleStat = this.state.toggleViewStat;
    let label = toggleStat ? 'Add' : 'Show';
    this.setState({
      toggleViewStat: !toggleStat,
      buttonLabel: label
    });
  }

  addCard = (person) => {
    const data = [person, ...this.state.data];
    this.setState({
      data : data,
      toggleViewStat: false,
      buttonLabel: 'Add'
    });
  }

  removeCard = (dataId) => {
    console.log(dataId);
    const data = [...this.state.data];
    const index = data.findIndex((person) => {
      return dataId === person.id
    })
    data.splice(index, 1);
    this.setState({ data : data });
  }

  render() {
    let dashBoard = [];
    let inputPlate = null;
    if(!this.state.toggleViewStat) {
      dashBoard = [...this.state.data];
    } else {
      inputPlate = <InputPlate addCard={this.addCard}/>
    }

    return (
      <div>
        <Header toggle={this.toggleViewHandler} label={this.state.buttonLabel}/>
        <Dashboard data={dashBoard} toggleStat={this.toggleViewStat} remove={this.removeCard} />
        {inputPlate}
      </div>
    );
  }
}

export default App;
