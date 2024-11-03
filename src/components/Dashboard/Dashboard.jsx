


const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-10 bg-purple-500">
         <h1 className="text-2xl font-bold text-white">Dashboard</h1>
         <h2 className="text-2xl text-center font-bold text-white">Explore the latest Gadgets that will take 
          your experience to the next lavel. From 
          smart device to <br />the coolest accesories. We have it all!
          </h2>

          <div className="flex gap-4">
          <button className="btn">Cart</button>
          <button className="btn">Wish List</button>
          </div>
    </div>
  )
}

export default Dashboard