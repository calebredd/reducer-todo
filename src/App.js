import React, { useState, useReducer } from "react";
import "./App.scss";
import { reducer, initialState } from "./reducers/reducer";
function App() {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const id = Date();
    const newItem = { description: text, completed: false, id: id };
    if (text != "") {
      dispatch({ type: "ADD", item: newItem });
    }
    setText("");
    e.target.reset();
  };
  const remove = e => {
    // console.log(e.target.parentNode.id);
    dispatch({ type: "REMOVE", item: e.target.parentNode.id });
  };
  const complete = e => {
    // console.log(e.target.parentNode.id);
    dispatch({ type: "COMPLETED", item: e.target.parentNode.id });
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
          <button type="submit">ADD</button>
        </form>
        <div className="todoList">
          {state.items.map(item => (
            <div
              key={item.id}
              id={item.id}
              className={item.completed ? "todoItem complete" : "todoItem"}
            >
              <button id="remove" onClick={e => remove(e)}>
                X
              </button>
              <button
                id={item.completed ? "undo" : "completed"}
                onClick={e => complete(e)}
              >
                {item.completed ? "Undo" : "Complete"}
              </button>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
