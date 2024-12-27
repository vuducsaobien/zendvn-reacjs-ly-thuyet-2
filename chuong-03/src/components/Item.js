import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';
import { getLevel } from "../helpers/level";

function item(props) {
    const { index, name, level, id, onClickDeleteList, handleOpenForm } = props;

    // Functions
    function handleDeleteItem(id){
        onClickDeleteList(id)
    }

    function handleEditItem(item){
        // handleEditState(item);
        handleOpenForm();
    }

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{name}</td>
            <td className="text-center">
                {getLevel(level)}
            </td>
            <td>
                <button onClick={() => {handleEditItem(props)}} type="button" className="btn btn-warning">Edit</button>
                <button onClick={() => {handleDeleteItem(id)}} type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleOpenForm : () => {
            dispatch({type: types.OPEN_FORM})
        }
    }
}

export default connect(null, mapDispatchToProps) (item);

// export default item;
