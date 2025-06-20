import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ADD_ITEM, actCloseForm } from '../actions';

function Form(props) {
    // Capture props in a closure
    const { formCancel, itemSelected, isShowForm, formSubmit } = props;

    // States
    const [task_name, setTaskName] = useState('');
    const [task_level, setTaskLevel] = useState(0);
    const [actionForm, setActionForm] = useState('add'); // Add or Edit

    // Thêm useEffect để cập nhật state khi itemSelected thay đổi
    useEffect(() => {
        if (itemSelected) {
            setTaskName(itemSelected.name);
            setTaskLevel(itemSelected.level);
            if (itemSelected.id) { // Edit
                setActionForm('edit');
            }
        }
    }, [itemSelected]);

    // Functions
    function handleCancel(){
        formCancel();
    }

    function handleChange(event) {
        const {name, value} = event.target;
        if (name === 'task_name') setTaskName(value);
        if (name === 'task_level') setTaskLevel(value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (actionForm === 'add') {
            let item = {
                name : task_name,
                level : task_level
            };
            formSubmit(item);
            formCancel();
    
        } else if (actionForm === 'edit') {
            // let item = {
            //     id : itemSelected.id,
            //     name : task_name,
            //     level : task_level,
            //     type : 'edit',
            // };
            // onClickSubmit(item);
        }
    }

    // Logic Proccess
    if (!isShowForm) return null;

    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="form-group">
                    <label className="sr-only" htmlFor="task_name">
                        label
                    </label>
                    <input
                        type="text" name='task_name' className="form-control" placeholder="Task Name"
                        onChange={handleChange} value={task_name}
                    />
                    </div>
                    <div className="form-group">
                    <label className="sr-only" htmlFor="task_level">
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

const mapStateToProps = state => {
    return {
        isShowForm : state.isShowForm,
        itemSelected : state.itemSelected,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        formCancel : () => {
            dispatch(actCloseForm())
        },
        formSubmit : (item) => {
            dispatch(ADD_ITEM(item))
            dispatch(actCloseForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Form);
