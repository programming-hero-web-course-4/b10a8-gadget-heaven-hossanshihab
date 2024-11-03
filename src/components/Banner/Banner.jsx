

import bannerImage from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="bg-purple-800 text-white text-center p-10 space-y-6">
      <h2 className="text-4xl font-bold">
        Upgrade Your Tech Accessorize with <br />
        Gadget Heaven Accessories
      </h2>
      <p className="mb-6">
        Explore the latest gadgets that will take your experience to
        the next level. From smart devices to  <br />
        the coolest accessories, we have it all!
      </p>
      <button className="bg-white btn text-purple-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
        Shop Now
      </button>

      <div className="mt-10 flex justify-center">
        <img
          src={bannerImage}
          alt="VR Gadget"
          className="rounded-lg border-4 border-white shadow-lg max-w-2xl"
        />
      </div>
    </div>
    
  );
};

export default Banner;
