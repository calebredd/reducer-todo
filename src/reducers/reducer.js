// import React, { useReducer } from "react";


export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { state };
    case "COMPLETED":
      return { state };
    case "REMOVE":
      return { state };
    default:
      return state;
  }
};
