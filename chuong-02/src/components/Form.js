import { useState } from 'react';

function Form(props) {
    // Capture props in a closure
    const { onClickCancel, onClickSubmit } = props;

    // States
    const [task_name, setTaskName] = useState('');
    const [task_level, setTaskLevel] = useState(0);

    // Functions
    function handleCancel(){
        onClickCancel();
    }

    function handleChange(event) {
        const {name, value} = event.target;
        if (name === 'task_name') setTaskName(value);
        if (name === 'task_level') setTaskLevel(value);
    }
    console.log(itemSelected);

    function handleSubmitForm(event) {
        event.preventDefault();

        let item = {
            name : task_name,
            level : task_level
        };
        onClickSubmit(item);
    }

  return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form onSubmit={handleSubmitForm} className="form-inline">
                    <div className="form-group">
                    <label className="sr-only" htmlFor="">
                        label
                    </label>
                    <input
                        type="text" name='task_name' className="form-control" placeholder="Task Name"
                        onChange={handleChange} value={task_name}
                    />
                    </div>
                    <div className="form-group">
                    <label className="sr-only" htmlFor="">
                        label
                    </label>
                    <select
                        name="task_level" className="form-control" required="required"
                        onChange={handleChange} value={task_level}
                    >
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                    <button onClick={handleCancel} type="button" className="btn btn-default">
                    Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;
