import React from 'react';
import arrowDownIcon from '../assets/images/arrowdown.png';
import CodeSnippetComponent from './CodeSnippetComponent';

function ArrowDownIcon(){

  return (
    <div>
      <img src={arrowDownIcon}/>
      <CodeSnippetComponent></CodeSnippetComponent>
    </div>
  );
}

export default ArrowDownIcon;
