import { getLevel } from "../helpers/level";

function item(props) {
    const { index, name, level, id, onClickDeleteList, handleEdit } = props;

    // Functions
    function handleDeleteItem(id){
        // console.log(id)
        onClickDeleteList(id)
    }

    function handleEditItem(item){
        // onClickDeleteList(id)
        // console.log(item);
        // console.log('handleEditItem');
        handleEdit(item);
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

export default item;
