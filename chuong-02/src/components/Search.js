// import { getLevel } from "../helpers/level";
import { useState
    // , useRef 
} from 'react';


function Search(props) {
    const { onClickGo } = props;

    // Create a ref for the username input
    // const searchRef = useRef(null);

    // States
    const [strSearchSearch, setStrSearchSearch] = useState('123');
    

    // function handleSearch(search){
    function handleSearch(){
        // console.log('handleSearch');
        // console.log(strSearchSearch);
        onClickGo(strSearchSearch);
    }

    function handleClear(){
        setStrSearchSearch('');
    }

    function handleChange(event){
        setStrSearchSearch(event.target.value);
    }

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    // ref="search"
                    // ref={searchRef}
                    placeholder="Search for..."
                    value={strSearchSearch}
                    // onChange={(e) => setStrSearchSearch(e.target.value)} // cach 1
                    onChange={handleChange} // cach 2
                />
                <span className="input-group-btn">
                <button onClick={() => handleSearch()} className="btn btn-info" type="button">
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
