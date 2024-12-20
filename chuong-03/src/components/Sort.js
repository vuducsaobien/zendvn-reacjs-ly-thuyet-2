// import { getLevel } from "../helpers/level";


function Sort(props) {
    const { orderBy, orderDir, onClickSortControl } = props;
    let strSort = `${orderBy} ${orderDir}`;

    function handleSortSort(orderBy, orderDir) {
        // console.log('handleSort - Sort ' + orderBy + '-' + orderDir);
        onClickSortControl(orderBy, orderDir);
    }

    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
                <button
                className="btn btn-default dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                >
                Sort by <span className="caret" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>
                    <button onClick={()=>handleSortSort('name', 'asc')} type="button">Name ASC</button>
                </li>
                <li>
                    <button onClick={()=>handleSortSort('name', 'desc')} type="button">Name DESC</button>
                </li>
                <li role="separator" className="divider" />
                <li>
                    <button onClick={()=>handleSortSort('level', 'asc')} type="button">Level ASC</button>
                </li>
                <li>
                    <button onClick={()=>handleSortSort('level', 'desc')} type="button">Level DESC</button>
                </li>
                </ul>
                <span className="label label-success label-medium">{strSort}</span>
            </div>
        </div>
    );
}

export default Sort;
