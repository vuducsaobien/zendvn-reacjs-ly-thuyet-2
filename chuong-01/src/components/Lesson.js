// import React from "react";
import React, { Component } from "react";

// Method 1
function Lesson() {
  return (
    <li className="list-group-item">Text</li>
  );
}

// Method 2
// class Lesson extends Component {
//     render() {
//       return React.createElement('li', { className: 'list-group-item' }, 'Text 2');
//     }
// }
  
export default Lesson;
