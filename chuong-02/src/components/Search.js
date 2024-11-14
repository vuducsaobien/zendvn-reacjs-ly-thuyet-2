// import { getLevel } from "../helpers/level";
import { useState, useRef } from 'react';


function Search() {
    // const { index, name, level } = props;

    // Create a ref for the username input
    const searchRef = useRef(null);

    // States
    const [strSearchSearch, setStrSearchSearch] = useState('123');
    

    function handleSearch(search){
        console.log('handleSearch');
        console.log(search);
    }

    function handleClear(){
        setStrSearchSearch('');
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
                    value={strSearchSearch}
                    onChange={(e) => setStrSearchSearch(e.target.value)}
                />
                <span className="input-group-btn">
                <button onClick={() => handleSearch(searchRef.current.value)} className="btn btn-info" type="button">
                    Go!
                </button>

                <button onClick={() => handleClear()} className="btn btn-danger" type="button">
                    Clear
                </button>

                </span>
            </div>
        </div>
    );
}

export default Search;
