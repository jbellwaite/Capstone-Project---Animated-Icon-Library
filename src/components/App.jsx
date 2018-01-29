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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterIconList: []
    };
    this.handleIconList = this.handleIconList.bind(this);
  }

  handleIconList(newIcon){
    var newIconList = this.state.masterTicketList.slice();
    newIconList.push(newIcon);
    this.setState({masterIconList: newIconList});
  }

  render(){
    return (
      <div style={bodyStyle}>
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/mainapp"
            render={()=><MainApp onNewIcon={this.handleIconList}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
