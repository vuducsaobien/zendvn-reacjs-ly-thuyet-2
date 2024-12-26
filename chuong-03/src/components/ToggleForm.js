import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';

function ToggleForm(props) {
    // Capture props in a closure
    const { handleToggle, isShowForm } = props;

    // Cách 1
    function toggleForm(){
        console.log('toggleForm');
        handleToggle(); // props handleToggle lấy từ store
    }

    let btnName = (isShowForm === true) ? 'Close Form' : 'Open Form';
    let btnClass = (isShowForm === true) ? 'btn-success' : 'btn-info';

    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button onClick={toggleForm} type="button" 
                className={`btn ${btnClass} btn-block`}>{btnName}
            </button>
        </div>
    );
}

// Lấy Prop từ Store (Đẩy những thuộc tính từ thằng state redux về Props của ToggleForm)
const mapStateToProps = state => {
    return {
        isShowForm : state.isShowForm
    }
}

// Thay đổi các Prop từ Store = dispatch (Đẩy những dispatch từ thằng state redux về Props của ToggleForm)
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle : () => {
            dispatch({type: types.TOOGLE_FORM})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ToggleForm);

