// import { getLevel } from "../helpers/level";


function Search() {
    // const { index, name, level } = props;

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input
                type="text"
                className="form-control"
                // ref="search"
                placeholder="Search for..."
                />
                <span className="input-group-btn">
                <button className="btn btn-info" type="button">
                    Go!
                </button>
                </span>
            </div>
        </div>
    );
}

export default Search;
