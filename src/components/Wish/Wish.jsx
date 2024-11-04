




import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../../utility/AddToDb";

const Wish = () => {
  const [cartList, setCartList] = useState([]);
  const allGadget = useLoaderData();

  useEffect(() => {
    const storedCartList = getStoredWishList();

    const storedCartListInt = storedCartList.map((id) => parseInt(id, 10));

    const cartList = allGadget.filter((gadget) =>
      storedCartListInt.includes(parseInt(gadget.product_id, 10))
    );
    setCartList(cartList);
    console.log( cartList);
  }, [allGadget]);

  return (
    <div className="cart-list">
        <h1 className="text-center font-bold p-10">YOUR WISH LIST</h1>
    {cartList.map((cart, index) => (
        <div key={index} cart={cart} className="hero bg-base-200 w-full p-10 mb-4">
            <div className="hero-content flex-col lg:flex-row border-2 rounded-2xl">
                <img
                    src={cart.product_image}
                    alt={cart.product_title}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="flex flex-col justify-center p-4">
                    <h1 className="text-5xl font-bold">{cart.product_title}</h1>
                    <p className="py-4">{cart.description}</p>
                    <p className="py-2 font-bold text-2xl">Price: {cart.price}$</p>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    ))}
</div>
  );
};

export default Wish;
