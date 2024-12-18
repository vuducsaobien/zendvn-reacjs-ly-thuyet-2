import { useState } from 'react';

// import _ from 'lodash';
// import {filter as filterDash, includes, orderBy as orderByDash, remove as removeDash} from 'lodash';


function StudyForm() {

    // Set States
    const [fullName, setFullName] = useState('');
    const [course, setCourse] = useState('php');

    function handleChange(event) {
        // setFullName(event.target.value)
        const {name, value} = event.target;
        if (name === 'fullName') setFullName(value);
        if (name === 'course') setCourse(value);
    }

    function handleSubmit(event) {
        // alert(fullName); // C1
        // alert(event.target.elements.fullName.value); // C2

        // alert(`Fullname: ${fullName}\nCourse: ${course}`); // C1
        
        const formElements = event.target.elements;
        alert(`Fullname: ${formElements.fullName.value}\nCourse: ${formElements.course.value}`); // C2
        event.preventDefault();
    }

  return (
    <div className="row">
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">Study Form</h3>
            </div>

            <div className="panel-body">
                <form onSubmit={handleSubmit}>
                    <legend>Forrm Register</legend>
                    <div className="form-group">
                        <label htmlFor="">Họ và tên</label>
                        <input 
                            value={fullName} onChange={handleChange} 
                            type="text" className="form-control" id="" 
                            name="fullName"
                            placeholder="Full Name"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Khoá học</label>
                        <select name="course" id="input" className="form-control" required 
                            onChange={handleChange} value={course}    
                        >
                            <option value="angular">Angular</option>
                            <option value="react">React</option>
                            <option value="nodejs">NodeJs</option>
                            <option value="php">PHP</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Khoá học</label>
                        <div className="radio">
                            <label>
                                <input type="radio" name="dsd" id="input" defaultValue />Học viên cũ
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="dsd" id="input" defaultValue />Học sinh sinh viên
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" name="dsd" id="input" defaultValue />Người khuyết tật
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-info" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}

export default StudyForm;
