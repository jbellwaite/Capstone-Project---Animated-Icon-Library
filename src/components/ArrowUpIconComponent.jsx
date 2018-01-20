import React from 'react';
import arrowUp from '../assets/images/arrowup.png';
import CodeSnippetComponent from './CodeSnippetComponent';

function ArrowUpIconComponent(){

  return (
    <div>
      <img src={arrowUp}/>
      <CodeSnippetComponent></CodeSnippetComponent>
    </div>
  );
}

export default ArrowUpIconComponent;
