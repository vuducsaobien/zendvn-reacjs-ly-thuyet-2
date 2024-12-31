import { connect } from 'react-redux';
import { getLevel } from "../helpers/level";
import { DELETE_ITEM, OPEN_FORM } from '../actions';

function item(props) {
    const { index, name, level, id, handleOpenForm, handleDeleteItemStore } = props;

    // Functions
    function handleDeleteItem(id){
        handleDeleteItemStore(id)
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
            dispatch(OPEN_FORM())
        },
        handleDeleteItemStore : (id) => {
            dispatch(DELETE_ITEM({id}))
        }
    }
}

export default connect(null, mapDispatchToProps) (item);

// export default item;
