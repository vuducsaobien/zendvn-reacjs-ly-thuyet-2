import { useState } from 'react';
import { connect } from 'react-redux';
import * as types from '../constants/ActionTypes';

function Search(props) {
    
    // Props
    const { goSearch, search } = props;

    // States
    const [strSearchSearch, setStrSearchSearch] = useState('');

    // Functions
    function handleSearch(){
        goSearch(strSearchSearch);
    }

    function handleClear(){
        setStrSearchSearch(''); // clear state: strSearchSearch
        goSearch('');
    }

    function handleChange(event){
        setStrSearchSearch(event.target.value);
    }

    // Logic
    let strSearch = (search !== '') ? search : strSearchSearch;

    // Render
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    value={strSearch}
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

const mapStateToProps = state => {
    return {
        search : state.search
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goSearch : (search) => {
            dispatch({type: types.CHANGE_SEARCH, search: search})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Search);