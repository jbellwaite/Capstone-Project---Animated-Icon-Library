import React from 'react';
import ArrowDownIcon from '../assets/images/arrowdown.png';
import CodeSnippetComponent from './CodeSnippetComponent';

const buttonStyle={
  display: 'flex',
  boxShadow: '0 4px 7px 0 rgba(0,0,0,0.50)',
  border: '10px solid #163742',
  borderRadius: '15px',
  justifyContent: 'center',
  alignItems: 'center',
};

const arrowDownIcon={
  width: '10%',
};

class GetCodeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getCodeVisible: false
    };
    this.getCode = this.getCode.bind(this);
  }

  getCode(){
    let makeCodeVisible = !this.state.getCodeVisible;
    this.setState({getCodeVisible: makeCodeVisible});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.getCodeVisible === true){
      currentlyVisibleContent = <CodeSnippetComponent></CodeSnippetComponent>;
    } else {
      currentlyVisibleContent = false;
    }

    return (
      <div>
        <div style = {buttonStyle} onClick={this.getCode}>
          <img src={ArrowDownIcon} style={arrowDownIcon}/>
          <h2>get code</h2>
        </div>
        <div>
          {currentlyVisibleContent}
        </div>

      </div>
    );
  }
}

export default GetCodeButton;
