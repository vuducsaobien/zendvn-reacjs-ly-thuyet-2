import React from "react";
import { useState } from "react";

// function State() {
//     // Set State
//     const arrayCounterState = useState(0);
//   return (
//     <div className="col-xs-12">
//         <p>You clicked {arrayCounterState[0]} times</p>
//         {/* <button onClick={() => arrayCounterState[1](10)} className="btn btn-success" type="button">Counter</button> */}
//         <button onClick={() => arrayCounterState[1](arrayCounterState[0] + 10)} className="btn btn-success" type="button">Counter</button>
//     </div>
//   );
// }



// function State(props) {
//     // Set State
//     // Destructuring Es6
//     const [counter, setCounter] = useState(0);
//     const [listTask, setListTask] = useState(['Task - 01', 'Task - 02']);

//     console.log(props);
//     console.log(props.fullName);

//   return (
//     <div className="col-xs-12">
//         <p>You clicked {counter} times</p>
//         <p>List Task : {listTask.toString()}</p>

//         <p>Full Name: {props.fullName}</p>
//         <button onClick={() => setCounter(counter + 1)} 
//         className="btn btn-success" type="button">Counter</button>
//     </div>
//   );
// }



// function State({ age, fullName }) {
//     // Set State
//     // Destructuring Es6
//     const [counter, setCounter] = useState(0);
//     const [listTask, setListTask] = useState(['Task - 01', 'Task - 02']);

//   return (
//     <div className="col-xs-12">
//         <p>You clicked {counter} times</p>
//         <p>List Task : {listTask.toString()}</p>

//         <p>Full Name: {fullName}</p>
//         <p>Age: {age}</p>

//         <button onClick={() => setCounter(counter + 1)} 
//         className="btn btn-success" type="button">Counter</button>
//     </div>
//   );
// }





function State(props) {
    // Set State
    // Destructuring Es6
    const { age, fullName } = props;
    const [counter, setCounter] = useState(0);
    const [listTask, setListTask] = useState(['Task - 01', 'Task - 02']);

  return (
    <div className="col-xs-12">
        <p>You clicked {counter} times</p>
        <p>List Task : {listTask.toString()}</p>

        <p>Full Name: {fullName}</p>
        <p>Age: {age}</p>

        <button onClick={() => setCounter(counter + 1)} 
        className="btn btn-success" type="button">Counter</button>
    </div>
  );
}

export default State;
