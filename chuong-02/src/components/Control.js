import Search from "./Search";
import Sort from "./Sort";


function Control(props) {
    // Capture props in a closure
    const { onClickAdd, isShowFormApp } = props;

    // console.log('isShowFormApp');
    // console.log(isShowFormApp);

    function handleAdd(){
        onClickAdd();
    }

    let eleButton = <button onClick={handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;

    if (isShowFormApp === true) {
        eleButton = <button onClick={handleAdd} type="button" className="btn btn-success btn-block">Close Form</button>;
    }

  return (
        <div className="row">
            {/* SEARCH : START */}
            <Search/>
            {/* SEARCH : END */}

            {/* SORT : START */}
            <Sort />
            {/* SORT : END */}
            
            {/* ADD : START */}
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                {eleButton}
            </div>
            {/* ADD : END */}
        </div>
    );
}

export default Control;
