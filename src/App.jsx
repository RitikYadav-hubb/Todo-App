import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo.jsx";

import { useState } from "react";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="class main-container">
      <div className="class input-container">
        <AddTodo addList={addList} />
        <h1>TODO </h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoItems
              key={i}
              index={i}
              item={listItem}
              deleteListItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
