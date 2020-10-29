import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
const url = "https://course-api.netlify.app/api/react-useReducer-cart-project";
const AppContext = React.createContext();
const defaultState = {
  loading: false,
  cart: [],
  amount: 0,
  total: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearAll = () => {
    dispatch({ type: "CLEAR-ALL" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const toggle = (id, type) => {
    dispatch({ type: "TOGGLE", payload: { id, type } });
  };
  const load = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAll,
        remove,
        toggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
