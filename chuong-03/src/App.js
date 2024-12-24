import { useState, useEffect } from 'react';

import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";
// import dataMock from './mock/tasks';
import storage from "./redux";

// import _ from 'lodash';
import {filter as filterDash, includes, orderBy as orderByDash, remove as removeDash} from 'lodash';
import { v4 as uuidv4 } from 'uuid';


function App() {

    // Set States
    const [items, setItems] = useState([]);
    // const { items } = mockData;
    const [isShowForm, setIsShowForm] = useState(false);
    const [strSearchApp, setStrSearchApp] = useState('');
    const [orderBy, setOrderBy] = useState('name');
    const [orderDir, setOrderDir] = useState('asc');
    const [itemSelected, setItemSelected] = useState(null);

    useEffect(() => {
        // Đoạn code này sẽ chạy một lần duy nhất khi component được mount
        // setItems(dataMock);

        const storedItems = localStorage.getItem('tasks');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
    }, []); // Empty dependency array = chạy một lần khi component mount

    let eleForm = null;
    if (isShowForm) {
        eleForm = <Form 
            itemSelected={itemSelected}
            onClickSubmit={handleSubmitApp}
            onClickCancel={closeForm}
        />;
    }

    function handleToogleForm(){
        setIsShowForm(!isShowForm);
        setItemSelected(null);
    }

    function handleSortApp(orderBy, orderDir){
        // console.log('handleSort - App : ' + orderBy + '-' + orderDir);
        setOrderBy(orderBy);
        setOrderDir(orderDir);
    }

    function closeForm(){
        setIsShowForm(false);
        setItemSelected(null);
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

        localStorage.setItem('tasks', JSON.stringify(itemsRemove));
    }

    function handleAddItem(item) {
        let newItems = [...items, {
            id: uuidv4(),
            name: item.name,
            level: +item.level
        }];
        setItems(newItems);
        setIsShowForm(false);

        localStorage.setItem('tasks', JSON.stringify(newItems));
    }

    function handleEditItem(item) {
        // Tạo mảng mới và cập nhật item được chỉnh sửa
        let newItems = items.map(elm => {
            if (elm.id === item.id) {
                return {
                    ...elm,
                    name: item.name,
                    level: +item.level
                }
            }
            return elm;
        });
        setItems(newItems);
        setIsShowForm(false);

        localStorage.setItem('tasks', JSON.stringify(newItems));
    }

    function handleSubmitApp(item){
        if (item.type === 'add') {
            handleAddItem(item);
        } else if (item.type === 'edit') {
            handleEditItem(item);
        }
    }

    function handleEdit(item){
        setItemSelected(item);
        setIsShowForm(true);
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
        <List
            handleEdit={handleEdit}
            onClickDeleteApp={handleDeleteApp} items={itemsResult}/>
        {/* LIST : END */}

    </div>
  );
}

export default App;
