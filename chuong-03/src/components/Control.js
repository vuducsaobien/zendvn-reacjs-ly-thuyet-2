import Search from "./Search";
import Sort from "./Sort";
import ToggleForm from "./ToggleForm";

function Control(props) {
    // Capture props in a closure
    // const {  } = props;

    return (
        <div className="row">
            {/* SEARCH : START */}
            <Search />

            {/* SORT : START */}
            <Sort 
            />
            
            {/* ADD : START */}
            <ToggleForm />
        </div>
    );
}

export default Control;

