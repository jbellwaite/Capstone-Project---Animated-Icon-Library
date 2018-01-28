import React from 'react';
import PropTypes from 'prop-types';
import CodeSnippetComponent from './CodeSnippetComponent';

class IconComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clickSnippetVisibleOnPage: false
    };
    this.getCodeSnippet = this.getCodeSnippet.bind(this);
  }

  getCodeSnippet(){
    let makeCodeSnippetVisible = !this.state.clickSnippetVisibleOnPage;
    this.setState({clickSnippetVisibleOnPage: makeCodeSnippetVisible});
  }

render(){
  let currentlyVisibleContent = null;
  if(this.state.clickSnippetVisibleOnPage === true){
    currentlyVisibleContent = <CodeSnippetComponent></CodeSnippetComponent>;
      console.log('Code Snippet Should Appear');
  } else {
    currentlyVisibleContent = null;
    console.log('No Code Snippet');
  }
  return (
    <div>
      <p>{this.props.image}</p>
      <div>{this.props.visibleClick}</div>
    </div>
  );
}
}
IconComponent.propTypes = {
  image: PropTypes.object,
  visibleClick:PropTypes.object
};


export default IconComponent;
