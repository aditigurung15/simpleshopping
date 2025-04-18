import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { clearCart, calculateTotals } from "../Cart/CartSlice";

const CartContainer = () => {
  const { cartData, itemAmount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

//   if(itemAmount<1){
//     return (
//       <section className='cart'>
//    <header>
//     <h2 className="text-center text-2xl">your bag</h2>
//     <h4 className='text-center text-2xl'> is currently empty</h4>
//    </header>
//       </section>
//     )
//   }

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartData, dispatch]);


  return (
    <section className="ml-6">
      <header>
        <h1 className="text-2xl">Your Cart</h1>
      </header>
      <div>
        {cartData.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>

      <footer>
        <hr />

        <div>
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>

        <button
          type="button"
          className="text-2xl border-2 p-4 border-red-500 text-red-500"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
