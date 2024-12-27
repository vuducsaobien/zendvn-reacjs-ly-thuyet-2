import { useState, useEffect } from 'react';

import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";
import { remove as removeDash} from 'lodash';
import { v4 as uuidv4 } from 'uuid';

function App() {
    // Set States
    const [items, setItems] = useState([]);
    const [isShowForm, setIsShowForm] = useState(false);
    // const [strSearchApp, setStrSearchApp] = useState('');
    const [orderBy, setOrderBy] = useState('name');
    const [orderDir, setOrderDir] = useState('asc');
    const [itemSelected, setItemSelected] = useState(null);

    // Functions
    function handleSortApp(orderBy, orderDir){
        setOrderBy(orderBy);
        setOrderDir(orderDir);
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
    }

  return (
    <div>
        <Title />

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
            orderBy={orderBy}
            orderDir={orderDir}
            onClickSortApp={handleSortApp}
        />

        <Form 
            itemSelected={itemSelected}
            onClickSubmit={handleSubmitApp}
        />

        <List
            handleEdit={handleEdit}
            onClickDeleteApp={handleDeleteApp}
        />
    </div>
  );
}

export default App;
