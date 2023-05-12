import React, { useEffect } from 'react';
import PackageItem from '../PackageItem';
import { useStoreContext } from '../../src/utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../src/utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../src/utils/queries';
import { idbPromise } from '../../src/utils/helpers';


function PackageList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h3>Our Packages</h3>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <PackageItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>Please add a package to your cart!</h3>
      )}
    </div>
  );
}

export default PackageList;