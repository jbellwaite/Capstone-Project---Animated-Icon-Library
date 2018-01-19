import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import MainApp from './MainApp';
import HomeComponent from './HomeComponent';


function App(){
  const bodyStyle ={
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
  };

  return (
    <div style={bodyStyle}>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/mainapp" component={MainApp} />
      </Switch>
    </div>
  );
}

export default App;
