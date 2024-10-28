import Lesson from './Lesson';

function handleClick1() {
    alert('view 11');
}

function handleClick2(content) {
    alert(content);
}

function handleClick3(props) {
    alert(props.name);
}

/* Method 3 */
function showButtonFree(free, props) {
    if (free) {
        // return <button className="btn btn-warning" type="button">View</button>;
        return <div className="panel-footer">
                    <div className="btn-group">
                        <button onClick={handleClick1}                      className="btn btn-warning" type="button">View 1</button>
                        <button onClick={() => handleClick2('view 2 2')}    className="btn btn-danger" type="button">View 2</button>
                        <button onClick={() => handleClick3(props)}         className="btn btn-success" type="button">View 3</button>
                    </div>
                </div>;
        
    }
}

function Course(props) {

    /* Method 2 */
    // const showButtonFree = () => {
    //     return props.free ? <button className="btn btn-warning" type="button">View</button> : null;
    // };

  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">{props.name}</h3>
            </div>
            <div className="panel-body">
                <p>{props.time}</p>
                <p>{props.children}</p>

                <ul className="list-group">
                    <Lesson />
                    <Lesson />

                </ul>
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
            {showButtonFree(props.free, props)}

        </div>
    </div>
  );
}

export default Course;
