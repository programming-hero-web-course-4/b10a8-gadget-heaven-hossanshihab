import bannerImage from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className="bg-purple-700 text-white text-center py-14 px-5 rounded-b-3xl space-y-10">
      <h2 className="text-5xl font-bold">
        Upgrade Your Tech Accessorize with <br />
        Gadget Heaven Accessories
      </h2>
      <p className="text-xl">
        Explore the latest gadgets that will take your experience to the next level. 
        From smart devices to <br /> the coolest accessories, we have it all!
      </p>
      <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-200">
        Shop Now
      </button>

      <div className="mt-8 flex justify-center">
        <img
          src={bannerImage}
          alt="VR Gadget"
          className="rounded-lg border-4 border-white shadow-lg h-[350px] w-[650px] object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
