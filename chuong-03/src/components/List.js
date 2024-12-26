import Item from "./Item";
import { connect } from 'react-redux';

function List(props) {

    const { items, onClickDeleteApp, handleEdit, tasksList } = props;
    console.log('taskList', tasksList);

    let eleItem = items.map((item, index) => {
        return (
            <Item 
                onClickDeleteList={onClickDeleteApp} 
                handleEdit={handleEdit}
                key={index} index={index} name={item.name} level={item.level} id={item.id} />
        );
    });

  return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                    <th style={{ width: "10%" }} className="text-center">
                        #
                    </th>
                    <th>Task</th>
                    <th style={{ width: "20%" }} className="text-center">
                        Level
                    </th>
                    <th style={{ width: "20%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {eleItem}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        tasksList : state.items
    }
}

export default connect(mapStateToProps, null) (List);
// Trong List sẽ tạo ra prop tên là tasksList = state.items
