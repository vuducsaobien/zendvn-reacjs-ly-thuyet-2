// import { getLevel } from "../helpers/level";
import { useRef } from 'react';


function Search() {
    // const { index, name, level } = props;

    // Create a ref for the username input
    const searchRef = useRef(null);

    function handleSearch(search){
        console.log('handleSearch');
        console.log(search);
    }

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input
                type="text"
                className="form-control"
                // ref="search"
                ref={searchRef}
                placeholder="Search for..."
                />
                <span className="input-group-btn">
                <button onClick={() => handleSearch(searchRef.current.value)} className="btn btn-info" type="button">
                    Go!
                </button>
                </span>
            </div>
        </div>
    );
}

export default Search;
