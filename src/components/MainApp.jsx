import React from 'react';
import IconComponent from './IconComponent';
import HamburgerMenuIcon from './icons/HamburgerMenu';


const main = {
  display:'flex'
};

const iconBox = {
  width: '33%'
};

const icon = {
  width: '100%',
};

const masterIconList = [
  {
    image:<HamburgerMenuIcon></HamburgerMenuIcon>,
    code: '`.hamburger {width: 105.5px;height: 149px;background: url("https://photos-2.dropbox.com/t/2/AAAM7IG696shSWvSxloLe5prbCo0yIdHHxh4jTQsmAiJ4A/12/727371901/png/32x32/1/_/1/2/hamburgermenu.png/EIDRivUHGCYgAigC/pzLE2m6RvYxYUNP2fozmmrGM9HfGbY7h0_TC7W7liKk?preserve_transparency=1&size=2048x1536&size_mode=3")  left center no-repeat;.hamburger:hover{animation: play 0.5s steps(19);}@keyframes play {100% {background-position: -2046px;},`<div className="hamburger"></div>'
  },
  {
    image:<HamburgerMenuIcon></HamburgerMenuIcon>,
  },

];

function MainApp(){

  return (
    <div style={main}>
      <div style={iconBox}>
        <div style={icon}>
          {masterIconList.map((icon, index) =>
            <IconComponent
              image={icon.image}
              code={icon.code}
              key={index}
            />
          )}
        </div>
      </div>
    </div>
  );

}

export default MainApp;
