import Item from "./Item";

function List(props) {

    const { items, onClickDeleteApp } = props;

    let eleItem = items.map((item, index) => {
        return (
            <Item onClickDeleteList={onClickDeleteApp} key={index} index={index} name={item.name} level={item.level} id={item.id} />
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

export default List;
