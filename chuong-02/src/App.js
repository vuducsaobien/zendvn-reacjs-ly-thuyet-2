// import { useState } from 'react';

import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import Title from "./components/Title";

function App() {
  return (
    <div>
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}

        {/* FORM : START */}
        <Form />
        {/* FORM : END */}

        {/* LIST : START */}
        <List />
        {/* LIST : END */}

    </div>
  );
}

export default App;
