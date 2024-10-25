import Lesson from './Lesson';

function Course() {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">React JS</h3>
            </div>
            <div className="panel-body">
                <ul className="list-group">
                    <Lesson />
                </ul>
            </div>
        </div>
        {/* <button  className="btn btn-success" type="button">Register</button> */}
    </div>
  );
}

export default Course;
