import React from 'react';
import PropTypes from 'prop-types';
import GetCodeButton from './GetCodeButton';

class IconComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clickButtonVisibleOnPage: false
    };
    this.getCode = this.getCode.bind(this);
  }

  getCode(){
    let makeButtonVisible = !this.state.clickButtonVisibleOnPage;
    this.setState({clickButtonVisibleOnPage: makeButtonVisible});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.clickButtonVisibleOnPage === true){
      currentlyVisibleContent = <GetCodeButton></GetCodeButton>;
    } else {
      currentlyVisibleContent = false;
    }
    return (
      <div>
        <p onClick={this.getCode}>{this.props.image}</p>
        <div>{currentlyVisibleContent}</div>
      </div>
    );
  }
}
IconComponent.propTypes = {
  image: PropTypes.object,
  visibleClick:PropTypes.object
};


export default IconComponent;
