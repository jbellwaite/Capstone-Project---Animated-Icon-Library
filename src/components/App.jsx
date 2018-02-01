import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import MainApp from './MainApp';
import HomeComponent from './HomeComponent';

const bodyStyle ={
  boxSizing: 'border-box',
  margin: '0',
  padding: '0',
  backgroundImage: 'linear-gradient(-180deg, #E3DDD0 8%, #DDCCC5 22%, #B96982 73%, #163742 100%)'
};

function App() {

  return (
    <div style={bodyStyle}>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/mainapp"
          render={()=><MainApp/>} />
      </Switch>
    </div>
  );
}

export default App;
