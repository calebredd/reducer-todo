// import React, { useReducer } from "react";
export const initialState = {
  items: [
    {
      description: "Learn about reducers",
      completed: false,
      id: 0
    },
    { description: "Learning about reducers", completed: false, id: 1 },
    { description: "Learned about reducers", completed: false, id: 2 }
  ]
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        items: [...state.items, action.item]
      });
    case "COMPLETED":
      return Object.assign({}, state.items, {
        items: state.items.map(item => {
          if (item.id == action.item) {
            return Object.assign({}, item, {
              completed: !item.completed
            });
          }
          return Object.assign({}, item, { ...item });
        })
      });
    case "REMOVE":
      return Object.assign({}, state.items, {
        items: state.items.filter(item => item.id != action.item)
      });
    default:
      return state;
  }
};
