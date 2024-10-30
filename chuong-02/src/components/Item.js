import { getLevel } from "../helpers/level";


function item(props) {
    const { index, name, level } = props;

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{name}</td>
            <td className="text-center">
                {getLevel(level)}
            </td>
            <td>
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default item;
