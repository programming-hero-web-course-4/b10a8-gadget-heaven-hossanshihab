const Gadget = ({ gadget }) => {
  const { product_image, product_title, price, category } = gadget;
  return (
    <div>
      <div>{category}</div>
      <div className="card bg-base-100 w-96 shadow-xl m-5">
        <figure className="p-2">
          <img
            className="h-[200px] rounded-2xl"
            src={product_image}
            alt="Image"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="font-bold text-2xl">{product_title}</h2>
          <p className="font-semibold">Price: {price}$</p>

          <button className="btn bg-purple-700 text-white">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
