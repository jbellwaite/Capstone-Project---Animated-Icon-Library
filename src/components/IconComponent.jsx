import React from 'react';
import PropTypes from 'prop-types';


function IconComponent(props){
  return (
    <div>
      <image src={props.image}></image>
      <p>{props.description}</p>
    </div>
  );
}

IconComponent.propTypes = {
  image:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
};

export default IconComponent;
