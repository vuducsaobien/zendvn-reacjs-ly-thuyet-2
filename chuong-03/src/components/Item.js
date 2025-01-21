import { connect } from 'react-redux';
import { getLevel } from "../helpers/level";
import { DELETE_ITEM, actOpenForm, SET_ITEM_SELECTED } from '../actions';

function item(props) {
    const { index, name, level, id, handleOpenForm, handleDeleteItemStore } = props;

    // Functions
    function handleDeleteItem(id){
        handleDeleteItemStore(id)
    }

    function handleEdit(item){
        handleOpenForm({ id: item.id, name: item.name, level: item.level });
    }

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{name}</td>
            <td className="text-center">
                {getLevel(level)}
            </td>
            <td>
                <button onClick={() => {handleEdit(props)}} type="button" className="btn btn-warning">Edit</button>
                <button onClick={() => {handleDeleteItem(id)}} type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleOpenForm : (item) => {
            dispatch(actOpenForm())
            dispatch(SET_ITEM_SELECTED(item))
        },
        handleDeleteItemStore : (id) => {
            dispatch(DELETE_ITEM({id}))
        }
    }
}

export default connect(null, mapDispatchToProps) (item);