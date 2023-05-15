import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../src/utils/queries';
import { idbPromise } from '../../src/utils/helpers';
import CartItem from '../../src/components/CartItem';
import Auth from '../../src/utils/auth';
import { useStoreContext } from '../../src/utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../src/utils/actions';

import '../../src/styles/cart.css';
import { BiShocked } from 'react-icons/bi';
import { BsCartFill } from 'react-icons/bs';

const stripePromise = loadStripe('pk_test_51N5rsyCg781pCXXGiM1B7NxX4ca8YqVd8zfjx7QJjNd0zRPA9uHKMTg1DXZkTRfmegPMwC67vAwkERGwP2Io3nRA00eZOkxyb2');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
      <span role="img" aria-label="trash">< BsCartFill style={{fontSize:'45px',justifyContent:'center'}} />
</span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <div className='opencheckout'>CHECKOUT CART</div>
      {state.cart.length ? (
        <div className='opencheckout'>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="opencheckout">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(Please log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <div className='opencheckout'>
          <span role="img" aria-label="shocked">< BiShocked style={{colour: 'navy', fontSize: '50px'}}/></span>
            Please add the package that you would like!
        </div>
      )}
    </div>
  );
};

export default Cart;
