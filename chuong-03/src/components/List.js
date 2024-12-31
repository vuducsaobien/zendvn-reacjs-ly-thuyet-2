import Item from "./Item";
import { connect } from 'react-redux';
import {filter as filterDash, includes, orderBy as orderByDash} from 'lodash';


function List(props) {
    const { items, search, sort } = props;

    // Logic Find search
    let itemsOrigin = [...items];
    let itemsResult = [];

    if (search.length > 0) {
        itemsResult = filterDash(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), search.toLowerCase());
        });
    } else {
        itemsResult = itemsOrigin;
    }

    // Sort
    let {orderBy, orderDir} = sort;
    itemsResult = orderByDash(itemsResult, [orderBy], [orderDir]);

    let eleItem = <tr><th colSpan={4}>Khong co du lieu</th></tr>;
    if (items.length > 0) {
        eleItem = itemsResult.map((item, index) => {
            return (
                <Item 
                    key={index} index={index} name={item.name} 
                    level={item.level} id={item.id}
                />
            );
        });    
    }

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
        items : state.items,
        search : state.search,
        sort : state.sort,
    }
}

export default connect(mapStateToProps, null) (List);
// Trong List sẽ tạo ra prop tên là tasksList = state.items
