import { useState } from 'react';

import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";
import dataMock from './mock/tasks';
// import _ from 'lodash';
import {filter as filterDash, includes, orderBy as orderByDash, remove as removeDash} from 'lodash';


function App() {

    // Set States
    const [items, setItems] = useState(dataMock);
    // const { items } = mockData;
    const [isShowForm, setIsShowForm] = useState(false);
    const [strSearchApp, setStrSearchApp] = useState('');
    const [orderBy, setOrderBy] = useState('name');
    const [orderDir, setOrderDir] = useState('asc');

    let eleForm = null;
    if (isShowForm) {
        eleForm = <Form 
            onClickSubmit={handleSubmitApp}
            onClickCancel={closeForm}
        />;
    }

    function handleToogleForm(){
        setIsShowForm(!isShowForm);
    }

    function handleSortApp(orderBy, orderDir){
        // console.log('handleSort - App : ' + orderBy + '-' + orderDir);
        setOrderBy(orderBy);
        setOrderDir(orderDir);
    }

    function closeForm(){
        setIsShowForm(false);
    }

    function handleSearchApp(inputStringFromControl){
        // console.log(inputStringFromControl);
        // console.log('App - handleSearch : ', inputStringFromControl);
        // console.log('App - strSearchApp 1 : ', strSearchApp);
        setStrSearchApp(inputStringFromControl);
        // console.log('App - strSearchApp 2 : ', strSearchApp);
    }

    function handleDeleteApp(id){
        let itemsRemove = removeDash(items, (item) => {
            return item.id !== id
        });
        setItems(itemsRemove);
    }

    function handleSubmitApp(item){
        console.log('App - handleSubmitApp');
        console.log(item);
    }

    // Logic Find search
    // let itemsOrigin = items;
    let itemsOrigin = [...items];

    let itemsResult = [];
    const search = strSearchApp;
    if (search.length > 0) {
        // C1
        // itemsOrigin.forEach((item) => {
        //     if (item.name.toLowerCase().indexOf(search) !== -1) {
        //         itemsResult.push(item);
        //     }
        // })

        // C2
        // itemsResult = _.filter(itemsOrigin, (item) => {
        //     return _.includes(item.name, search);
        // });
        itemsResult = filterDash(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), search.toLowerCase());
        });

    } else {
        itemsResult = itemsOrigin;
        // console.log('123 s');
    }

    // Sort
    itemsResult = orderByDash(itemsResult, [orderBy], [orderDir]);

    // itemsOrigin.push('123 push');
    // console.log('itemsOrigin', itemsOrigin); // 5 phan tu
    // console.log('items State', items); // Cung 5 phan tu luon => Muon khong thay doi state items => let itemsOrigin = [...items];

    // console.log('App - strSearchApp 3 : ', strSearchApp);


  return (
    <div>
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
            // strSearch = {strSearch}
            orderBy={orderBy}
            orderDir={orderDir}
            onClickAdd={handleToogleForm}
            onClickSortApp={handleSortApp}
            isShowFormApp = {isShowForm}
            onClickGoApp = {handleSearchApp}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}

        {/* FORM : START */}
        {eleForm}
        {/* FORM : END */}

        {/* LIST : START */}
        <List onClickDeleteApp={handleDeleteApp} items={itemsResult}/>
        {/* LIST : END */}

    </div>
  );
}

export default App;
