import React from 'react';
import ArrowDownIcon from '../assets/images/arrowdown.png';

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

const getCode={
  width: '70%',
};

// const codeSnippet={
//   backgroundColor:'yellow',
//   height: '30px',
//   width: '30px'
// };

class GetCodeButton extends React.Component {


  constructor(){
    super();
    this.state = {
      clickedButton: false
    };
    this.getCode = this.getCode.bind(this);
  }

  getCode(){
    let newVoteUp = !this.state.clickedButton;
    this.setState({clickedButton: newVoteUp});
  }

  render(){
    // let currentlyVisibleCodeSnippet = null;
    if (this.state.clickedButton){
      console.log(this.state);
    }

    return (
      <div>
        <div style = {buttonStyle} onClick={this.getCode}>
          <img src={ArrowDownIcon} style={arrowDownIcon}/>
          <h2 style={getCode}>get code</h2>
        </div>

      </div>
    );
  }
}

export default GetCodeButton;
