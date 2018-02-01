import React from 'react';
import PropTypes from 'prop-types';
import Style from 'style-it';

function defaultState() {

  return(
  IconList: [
    {
      IconCss:`
        .hamburger {
          width: 105.5px;
          height: 149px;
          background: url("https://photos-2.dropbox.com/t/2/AAAM7IG696shSWvSxloLe5prbCo0yIdHHxh4jTQsmAiJ4A/12/727371901/png/32x32/1/_/1/2/hamburgermenu.png/EIDRivUHGCYgAigC/pzLE2m6RvYxYUNP2fozmmrGM9HfGbY7h0_TC7W7liKk?preserve_transparency=1&size=2048x1536&size_mode=3")
            left center no-repeat;
        }
        .hamburger:hover{
          animation: play 0.5s steps(19);
        }
        @keyframes play {
      100% {
        background-position: -2046px;
      }`


      IconReturnCode: '<div className="hamburger"></div>'
      IconClicked: 'false'
      GetCodeButtonClicked: 'false'
      ComponentCodeToDisplay: 'TBD'
      }
    ]
  );
}

defaultState.propTypes = {
  IconList: PropTypes.arrayOf(
    React.PropTypes.shape({
      IconCss: PropTypes.string,
      IconReturnCode: PropTypes.string,
      IconClicked: PropTypes.bool,
      GetCodeButtonClicked: PropTypes.bool,
      ComponentCodeToDisplay: PropTypes.string
    })
    )
}

export default defaultState;
