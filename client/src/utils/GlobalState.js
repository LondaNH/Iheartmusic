import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
//tutorial on Global State in React from Weibenfalk
const StoreContext = createContext();

const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  console.log('State:', state);
  console.log('Dispatch:', dispatch);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };