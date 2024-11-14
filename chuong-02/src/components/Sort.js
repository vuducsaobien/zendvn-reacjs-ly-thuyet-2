// import { getLevel } from "../helpers/level";


function Sort() {
    // const { index, name, level } = props;

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
                    <button type="button">Name ASC</button>
                </li>
                <li>
                    <button type="button">Name DESC</button>
                </li>
                <li role="separator" className="divider" />
                <li>
                    <button type="button">Level ASC</button>
                </li>
                <li>
                    <button type="button">Level DESC</button>
                </li>
                </ul>
                <span className="label label-success label-medium">NAME - DESC</span>
            </div>
        </div>
    );
}

export default Sort;
