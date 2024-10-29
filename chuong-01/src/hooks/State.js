import React from "react";
import { useState, useEffect } from "react";

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

    // Life Cycle Hook
    useEffect(() => {
        console.log('1 - Callback trong useEffect thu - 1 ?') 
        
        // Giong Component Did Mount & Component Did Update
        // Click button Counter
        // Gọi mỗi lần Render
    })

    useEffect(() => {
        console.log('2 - Callback trong useEffect thu - 2 - 01 ?') 
        
        // Giong Component Did Mount
        // Click button Counter
        // Gọi 1 lần duy nhất lúc Render ban đầu
    }, [])

    useEffect(() => {
        console.log('3 - Callback trong useEffect thu - 2 - 02 ?') 
        
        // Giong Component Did Mount
        // Click button Counter
        // Gọi 1 lần duy nhất lúc Render ban đầu
    }, [])

    useEffect(() => {
        console.log('4 - Callback trong useEffect thu - 3 - 01 - Counter ?') 
        
        // Giong Component Did Mount
        // Click button Counter
        // Gọi mỗi lần Counter Render ban đầu (ban đầu + nhấn button Counter)
    }, [counter])

    useEffect(() => {
        console.log('5 - Callback trong useEffect thu - 3 - 02 - Add Task ?') 
        
        // Giong Component Did Mount
        // Click button Add Task
        // Gọi mỗi lần Add Task Render ban đầu (ban đầu + nhấn button Add Task)
    }, [listTask])

    useEffect(() => {
        console.log('6 - Callback trong useEffect thu - 3 - 03 - Counter + Add Task ?') 
        
        // Giong Component Did Mount
        // Click button Add Task
        // Gọi mỗi lần Counter + Add Task Render ban đầu (ban đầu + nhấn button Counter hoặc button Add Task)
    }, [counter, listTask])

    // Mới vào trang => 1, 2, 3, 4, 5, 6
    // Nhấn button Counter => 1, 4, 6
    // Nhấn button Add Task => 1, 5, 6

    function handleAddTask() {
        setListTask([
            ...listTask,
            parseInt(Math.random() * 999)
        ]);
    }

  return (
    <div className="col-xs-12">
        <p>You clicked {counter} times</p>
        <p>List Task : {listTask.toString()}</p>

        <p>Full Name: {fullName}</p>
        <p>Age: {age}</p>

        <button onClick={() => setCounter(counter + 1)} 
        className="btn btn-success" type="button">Counter</button>

        <button onClick={handleAddTask} 
        className="btn btn-danger" type="button">Add Task</button>

    </div>
  );
}

export default State;
