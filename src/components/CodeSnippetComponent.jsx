import React from 'react';

function CodeSnippetComponent(){
  const codeSnippetStyle = {
    border: '10px solid #163742',
    borderRadius: '15px',
    backgroundColor: '#163742'
  };
  const copyPaste = {
    height: '4vw',
    backgroundImage: 'linear-gradient(-180deg, rgba(239,239,206,0.00) 2%, #DBDAA0 59%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: '6px',
    border: '3px solid #163742',
  };
  const code = {
    background: '#E3DDD0',
    borderRadius: '6px',
    padding: '3px',
    border: '3px solid #163742',
  };

  return (
    <div style = {codeSnippetStyle}>
      <div style = {copyPaste}>
        <h3>Copy & Paste Code</h3>
      </div>
      <div style = {code}> <p>This icon's code will appear here.
      </p>
      </div>
    </div>
  );
}

export default CodeSnippetComponent;
