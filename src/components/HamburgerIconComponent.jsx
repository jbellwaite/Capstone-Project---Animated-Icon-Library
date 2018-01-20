import React from 'react';
import hamburgerMenu from '../assets/images/hamburgermenu.png';
import CodeSnippetComponent from './CodeSnippetComponent';
import GetCodeButton from './GetCodeButton';

function HamburgerIconComponent(){

  return (
    <div>
      <img src={hamburgerMenu}/>
      <GetCodeButton></GetCodeButton>
      <CodeSnippetComponent></CodeSnippetComponent>
    </div>
  );
}

export default HamburgerIconComponent;
