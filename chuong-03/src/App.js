import { useState } from 'react';

import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";
import * as Config from './constants/Config';

function App() {
    // Set States
    const [items, setItems] = useState([]);
    const [isShowForm, setIsShowForm] = useState(false);
    // const [strSearchApp, setStrSearchApp] = useState('');
    // const [orderBy, setOrderBy] = useState('name');
    // const [orderDir, setOrderDir] = useState('asc');
    const [itemSelected, setItemSelected] = useState(null);

    // Functions


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

        localStorage.setItem(Config.ITEMS_FROM_LOCAL_STOGARE, JSON.stringify(newItems));
    }

    // function handleSubmitApp(item){
    //     if (item.type === 'add') {
    //         handleAddItem(item);
    //     } else if (item.type === 'edit') {
    //         handleEditItem(item);
    //     }
    // }

    function handleEdit(item){
        setItemSelected(item);
    }

  return (
    <div>
        <Title />

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control 
        />

        <Form 
        />

        <List
            handleEdit={handleEdit}
        />
    </div>
  );
}

export default App;
