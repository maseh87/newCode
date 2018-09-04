import React from 'react'
import { render } from 'react-dom'


const ce = React.createElement;
//props are what is being passed from MyFirstComponent
const MyTitle = function(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
  // below is equivalent to the above commented out code
  return (
    <div>
      <h1 style={ {color: props.color} }>{props.title}</h1>
    </div>
  )
};

const MyFirstComponent = function() {
  return <div id="my-first-component">
    <MyTitle title="Game of Thrones" color="YellowGreen" />
    <MyTitle title="Stanger Things" color="GreenYellow" />
    <MyTitle title="Rick and Morty" color="LimeGreen" />
    <MyTitle title="Silicon Valley" color="peru" />
  </div>
};

render(ce(MyFirstComponent), document.getElementById('app'));
