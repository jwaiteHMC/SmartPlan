import React from 'react';
import AppContainer from './AppContainer';

global.num = 42; 
export default class App extends React.Component {
  render() {
    return <AppContainer />;

  }
} 
