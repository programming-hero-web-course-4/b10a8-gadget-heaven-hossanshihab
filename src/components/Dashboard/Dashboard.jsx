
import { Link } from 'react-router-dom';




const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-10 bg-purple-500">
         <h1 className="text-2xl font-bold text-white">Dashboard </h1>
         <h2 className="text-2xl text-center font-bold text-white">Explore the latest Gadgets that will take 
          your experience to the next lavel. From 
          smart device to <br />the coolest accesories. We have it all!
          </h2>

          <div className="flex gap-4">
          <Link to="/cart"><button className="btn  bg-purple-700 text-white">Cart List</button></Link>
          <Link to="/wish"><button className="btn bg-purple-700 text-white">Wish List</button></Link>
          </div>
    </div>
  )
}

export default Dashboard