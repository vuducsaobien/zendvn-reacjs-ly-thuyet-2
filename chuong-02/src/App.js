import { useState } from 'react';

import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";
import dataMock from './mock/tasks';

function App() {

    // Set States
    const [items] = useState(dataMock);
    // const { items } = mockData;

    const [isShowForm, setIsShowForm] = useState(false);

    // const [strSearch] = useState('');

    let eleForm = null;
    if (isShowForm) {
        eleForm = <Form 
            onClickCancel={closeForm}
        />;
    }

    function handleToogleForm(){
        setIsShowForm(!isShowForm);
    }

    function closeForm(){
        setIsShowForm(false);
    }

    function handleClickSearchApp(inputStringFromControl){
        console.log(inputStringFromControl);
        console.log('App - handleClickSearchApp');
    }

    // console.log('strSearch');
    // console.log(strSearch);


  return (
    <div>
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
            // strSearch = {strSearch}
            onClickAdd={handleToogleForm}
            isShowFormApp = {isShowForm}
            onClickGoApp = {handleClickSearchApp}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}

        {/* FORM : START */}
        {eleForm}
        {/* FORM : END */}

        {/* LIST : START */}
        <List items={items}/>
        {/* LIST : END */}

    </div>
  );
}

export default App;
