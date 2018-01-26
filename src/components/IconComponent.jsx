import React from 'react';
import PropTypes from 'prop-types';

function IconComponent(props){

  return (
    <div>
      <p>{props.image}</p>
    </div>
  );
}
IconComponent.propTypes = {
  image: PropTypes.object,
};

export default IconComponent;
