import { connect } from 'react-redux';

function ToggleForm(props) {
    // Capture props in a closure
    const { onClickAdd, isShowForm } = props;

    function handleAdd(){
        onClickAdd();
    }

    let btnName = (isShowForm === true) ? 'Close Form' : 'Open Form';
    let btnClass = (isShowForm === true) ? 'btn-success' : 'btn-info';

    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button onClick={handleAdd} type="button" 
                className={`btn ${btnClass} btn-block`}>{btnName}
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isShowForm : state.isShowForm
    }
}

export default connect(mapStateToProps, null) (ToggleForm);

