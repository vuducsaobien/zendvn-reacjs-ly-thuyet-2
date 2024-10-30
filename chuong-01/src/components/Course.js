import { useState, useRef } from 'react';
import Lesson from './Lesson';

function Course(props) {

    /* Method 2 */
    // const showButtonFree = () => {
    //     return props.free ? <button className="btn btn-warning" type="button">View</button> : null;
    // };

    // Create a ref for the username input
    const usernameRef = useRef(null);

    // Capture props in a closure
    const { name, time, free, children } = props;

    // Set States
    const [isShowOutline, setIsShowOutline] = useState(false);
    // const [totalStudent, setTotalStudent] = useState(68);


    function handleToogleOutline() {
        setIsShowOutline(!isShowOutline);
    }

    function handleClick1() {
        alert('view 11');
    }
    
    function handleClick2(content) {
        alert(content);
    }
    
    function handleClick3() {
        alert(name);
    }
    
    function registerCourse(ref) {
        console.log(ref);
        alert(ref.current.value);
    }

    /* Method 3 */
    function showButtonFree(usernameRef) {
        if (free) {
            return (
                <div className="btn-group">
                    <button onClick={handleClick1}                      className="btn btn-warning" type="button">View 1</button>
                    <button onClick={() => handleClick2('view 2 2')}    className="btn btn-danger" type="button">View 2</button>
                    <button onClick={handleClick3}                      className="btn btn-success" type="button">View 3</button>
                </div>
            );
        } else {
            return (
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Username..." ref={usernameRef}/>
                    <span className="input-group-btn">
                        <button onClick={() => registerCourse(usernameRef)} className="btn btn-info" type="button">Go!</button>
                    </span>
                </div>
            );
        }
    }
    
    let eleOutline = null;
    if (isShowOutline) {
        eleOutline = (
            <ul className="list-group">
                <Lesson />
                <Lesson />
            </ul>
        );
    }

  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">{name}</h3>
            </div>
            <div className="panel-body">
                <p>{time}</p>
                <p>{children}</p>
                <p><button onClick={handleToogleOutline} className="btn btn-success" type="button">Toogle Outline</button></p>
                {eleOutline}
            </div>

            {/* Method 1 */}
            {/* {props.free && (
                <div className='panel-footer'>
                    <button  className="btn btn-warning" type="button">View</button>
                </div>
            )} */}

            {/* Method 2 */}
            {/* {showButtonFree()} */}

            {/* Method 3 */}
            <div className="panel-footer">
                {showButtonFree(usernameRef)}
            </div>
        </div>
    </div>
  );
}

export default Course;
