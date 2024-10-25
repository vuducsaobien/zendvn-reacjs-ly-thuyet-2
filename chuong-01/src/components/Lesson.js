// import React from "react";
// import React, { Component } from "react";

// Method 1
function formatName(user){
    return user.firstName + ' ' + user.lastName
}

function Lesson() {
    const user = {
        firstName : 'Vu',
        lastName : 'Duc 11'
    }
    
  return (
    <li className="list-group-item">{formatName(user)}</li>
  );
}

// Method 2
// class Lesson extends Component {

//     formatName(user){
//         return user.firstName + ' ' + user.lastName
//     }

//     render() {
//         const user = {
//             firstName : 'Vu',
//             lastName : 'Duc 2'
//         }

//       return React.createElement('li', { className: 'list-group-item' }, this.formatName(user));
//     }
// }
  
export default Lesson;
