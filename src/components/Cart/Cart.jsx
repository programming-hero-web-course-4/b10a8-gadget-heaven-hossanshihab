import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList, updateStoredCartList } from "../../utility/AddToDb"; 
import { toast } from 'react-toastify';
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [sorted, setSorted] = useState(false); 
  const allGadget = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredCartList();
    console.log( storedCartList);

    const storedCartListInt = storedCartList.map((id) => parseInt(id, 10));
    console.log(storedCartListInt);

    if (allGadget && allGadget.length > 0) {
      const cartList = allGadget.filter((gadget) =>
        storedCartListInt.includes(parseInt(gadget.product_id, 10))
      );
      setCartList(cartList);
    } else {
      toast("No gadgets found.");
    }
  }, [allGadget]);

  // Calculate total cost
  const totalCost = cartList.reduce((acc, item) => acc + item.price, 0);

  // Sort cart items by price
  const handleSortByPrice = () => {
    const sortedCartList = [...cartList].sort((a, b) => {
      return sorted ? a.price - b.price : b.price - a.price; 
    });
    setCartList(sortedCartList);
    setSorted(!sorted);
  };

  const handleDelete = (productId) => {
    console.log( productId); 
    const updatedCartList = cartList.filter(cart => cart.product_id !== productId);
    console.log( updatedCartList); 
    setCartList(updatedCartList);

    const storedCartList = getStoredCartList();
    const updatedStoredCartList = storedCartList.filter(id => parseInt(id, 10) !== productId);
    console.log(updatedStoredCartList); 
    updateStoredCartList(updatedStoredCartList); 
  };

  return (
    <div className="cart-list">
      <div className="flex p-10 justify-between items-center w-11/12 mx-auto">
        <h1 className="font-bold">Cart</h1>
        <div className="flex justify-between items-center gap-10">
          <h2 className="font-bold">Total Cost: {totalCost}$</h2>
          <button className="btn bg-purple-500 text-white" onClick={handleSortByPrice}>
            Sort By Price
          </button>
          <button className="btn bg-purple-500 text-white">Purchase</button>
        </div>
      </div>
      {cartList.length > 0 ? ( 
        cartList.map((cart) => (
          <div
            key={cart.product_id} 
            className="hero bg-base-200 w-full p-10 mb-4"
          >
            <div className="hero-content flex-col lg:flex-row border-2 rounded-2xl">
              <img
                src={cart.product_image}
                alt={cart.product_title}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex flex-col justify-center p-2">
                <h1 className="text-5xl font-bold">{cart.product_title}</h1>
                <p className="py-4">{cart.description}</p>
                <p className="py-2 font-bold text-2xl">Price: {cart.price}$</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleDelete(cart.product_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;