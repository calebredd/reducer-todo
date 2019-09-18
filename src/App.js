import React, { useState, useReducer } from "react";
import "./App.scss";
import { reducer } from "./reducers/reducer";
function App() {
  const [text, setText] = useState("");
  const initialState = {
    items: [
      {
        description: "Learn about reducers",
        completed: false,
        id: 3892987589
      },
      { description: "Learning about reducers", completed: false, id: 9 },
      { description: "Learned about reducers", completed: false, id: 8 }
    ]
  };
  const [list, setList] = useState(initialState);
  console.log(list);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const id = Date();
    const newItem = { description: text, completed: false, id: id };
    console.log(newItem);
    setList(list.items.push(newItem));
    console.log(list);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reducer Todo App</h1>
      </header>
      <div>
        <h2 className="list">TODO LIST:</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <input onChange={e => handleChange(e)} placeholder={text} />
          <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
        </form>
        {/* <ul> */}
          {/* {state.items.map(item => (
            <li key={item.id}>
              {item.description} */}
              {/* {state[item].id} */}
              {/* {state[item].completed} */}
            {/* </li> */}
          {/* ))} */}
        {/* </ul> */}
        <button onClick={() => dispatch({ type: "COMPLETED" })}>
          COMPLETE
        </button>
        <button onClick={() => dispatch({ type: "REMOVE" })}>REMOVE</button>
      </div>
    </div>
  );
}

export default App;
