import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../src/utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../src/utils/actions';
import { QUERY_CATEGORIES } from '../../src/utils/queries';
import { idbPromise } from '../../src/utils/helpers';
import '../styles/PackageMenu.css'

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  console.log('State:', state);
  console.log('Dispatch:', dispatch);

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="ctgycontainer">
      <h2 className="title">Enjoy some time with your bae</h2>
      <h3 className='titlesmall'>Planning a trip with your special one?</h3>
      <h3 className='titlemedium'>Choose one of our packages from the menu</h3>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
