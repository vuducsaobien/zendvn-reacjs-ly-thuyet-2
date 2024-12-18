import { useState } from 'react';

// import _ from 'lodash';
// import {filter as filterDash, includes, orderBy as orderByDash, remove as removeDash} from 'lodash';


function StudyForm() {

    // Set States
    const [fullName, setFullName] = useState('');
    const [course, setCourse] = useState('php');
    const [object, setObject] = useState('nkt');


    function handleChange(event) {
        // setFullName(event.target.value)
        const {name, value} = event.target;
        if (name === 'fullName') setFullName(value);
        if (name === 'course') setCourse(value);
        if (name === 'object') setObject(value);
    }

    function handleSubmit(event) {
        const formElements = event.target.elements;
        const message = `Fullname: ${formElements.fullName.value}
        Course: ${formElements.course.value}
        Type: ${formElements.object.value}`;

        alert(message);
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
                                <input checked={object === 'old_student'} onChange={handleChange} 
                                value="old_student" type="radio" name="object"/>Học viên cũ
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input checked={object === 'student'} onChange={handleChange} 
                                value="student" type="radio" name="object"/>Học sinh sinh viên
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input checked={object === 'nkt'} value="nkt" onChange={handleChange} 
                                type="radio" name="object"/>Người khuyết tật
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
