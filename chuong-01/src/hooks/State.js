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

function State() {
    // Set State
    const [counter, setCounter] = useState(0);
    const [listTask, setListTask] = useState(['Task - 01', 'Task - 02']);

  return (
    <div className="col-xs-12">
        <p>You clicked {counter} times</p>
        <p>List Task : {listTask.toString()}</p>
        
        <button onClick={() => setCounter(counter + 1)} 
        className="btn btn-success" type="button">Counter</button>
    </div>
  );
}

export default State;
