import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { addToStoredCartList, addToStoredWishList } from "../../utility/AddToDb";


const GadgetDetails = () => {
    
    const data = useLoaderData();
    const {product_id} = useParams();
    const id = parseInt(product_id);
    console.log(id);
    // Need one data thats why use find 
    const gadget = data.find(gadget => gadget.product_id === product_id)
    const {price,description,product_title,product_image,rating,specification} = gadget;


    const handleAddToCart = (id) => {
      addToStoredCartList(id)
      console.log(id);
    }
    const handleAddToWishList = (id) => {
      addToStoredWishList(id)
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={product_image}
      className=" rounded-lg shadow-2xl h-[500px] w-[600px]" />
    <div className="space-y-2">
      <h1 className="text-5xl font-bold">{product_title}</h1>
      <p className="py-6">
       Price: ${price}
      </p>
      <button className="btn rounded-full border-2 bg-green-300 font-bold">In Stock</button>
      <h2>{description}</h2>
      {
        specification.map(specipication => <div 
        key={specipication.product_id} specipication={specipication}>

            <h1>Specifications: {specipication}</h1>    
            
        </div>)
      }
      <p>Rating: {rating}</p>

      <div className="flex items-center gap-5">
    
      <button onClick={()=>handleAddToCart(product_id)} className="btn bg-purple-500 text-white font-bold">Add To Cart</button>
      <button onClick={()=>handleAddToWishList(product_id)} className="btn">
      <FaHeart style={{ color: 'red', fontSize: '24px' }} />
      </button>
      </div>
    </div>
  </div>
</div>
    );
};

export default GadgetDetails;