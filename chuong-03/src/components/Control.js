import Search from "./Search";
import Sort from "./Sort";
import ToggleForm from "./ToggleForm";

function Control(props) {
    // Capture props in a closure
    const { onClickAdd, onClickGoApp, orderDir, orderBy, onClickSortApp } = props;

    return (
        <div className="row">
            {/* SEARCH : START */}
            <Search onClickGoControl={onClickGoApp}/>

            {/* SORT : START */}
            <Sort 
                orderBy={orderBy}
                orderDir={orderDir}
                onClickSortControl = {onClickSortApp}
            />
            
            {/* ADD : START */}
            <ToggleForm />
        </div>
    );
}

export default Control;

