import Lesson from './Lesson';

/* Method 3 */
function showButtonFree(free) {
    if (free) {
        return <button className="btn btn-warning" type="button">View</button>;
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
            {showButtonFree(props.free)}

        </div>
    </div>
  );
}

export default Course;
