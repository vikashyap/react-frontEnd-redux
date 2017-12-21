import React, { Component } from 'react';
import { render } from 'react-dom'
import Properties from '../Property/property-list'

export default class App extends Component {
  render() {
    return (
      <div className="app">
      <Properties />
      </div>
    );
  }
}