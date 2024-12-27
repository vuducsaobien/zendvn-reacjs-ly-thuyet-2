import { useState, useEffect } from 'react';

import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";
import {filter as filterDash, includes, orderBy as orderByDash, remove as removeDash} from 'lodash';
import { v4 as uuidv4 } from 'uuid';

function App() {
    // Set States
    const [items, setItems] = useState([]);
    const [isShowForm, setIsShowForm] = useState(false);
    const [strSearchApp, setStrSearchApp] = useState('');
    const [orderBy, setOrderBy] = useState('name');
    const [orderDir, setOrderDir] = useState('asc');
    const [itemSelected, setItemSelected] = useState(null);

    // Life Cycle
    useEffect(() => {
        // Đoạn code này sẽ chạy một lần duy nhất khi component được mount
        const storedItems = localStorage.getItem('tasks');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
    }, []); // Empty dependency array = chạy một lần khi component mount

    // Functions
    function handleToogleForm(){
        setIsShowForm(!isShowForm);
        setItemSelected(null);
    }

    function handleSortApp(orderBy, orderDir){
        setOrderBy(orderBy);
        setOrderDir(orderDir);
    }

    function closeForm(){
        // setIsShowForm(false);
        setItemSelected(null);
    }

    function handleSearchApp(inputStringFromControl){
        setStrSearchApp(inputStringFromControl);
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
        // setIsShowForm(true);
    }

    // Logic Find search
    let itemsOrigin = [...items];

    let itemsResult = [];
    const search = strSearchApp;
    if (search.length > 0) {
        itemsResult = filterDash(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), search.toLowerCase());
        });

    } else {
        itemsResult = itemsOrigin;
    }

    // Sort
    itemsResult = orderByDash(itemsResult, [orderBy], [orderDir]);

  return (
    <div>
        <Title />

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
            orderBy={orderBy}
            orderDir={orderDir}
            onClickAdd={handleToogleForm}
            onClickSortApp={handleSortApp}
            onClickGoApp = {handleSearchApp}
        />

        <Form 
            itemSelected={itemSelected}
            onClickSubmit={handleSubmitApp}
        />

        <List
            onClickDeleteApp={handleDeleteApp}
        />
    </div>
  );
}

export default App;
