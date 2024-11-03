import { useEffect, useState } from "react"
import Gadget from './../Gadget/Gadget';




const AllGadget = () => {
        const  [gadgets, setGadgets] = useState([]);
        useEffect(()=>{
            fetch('./alldata.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
        },[])
  return (
    <div>
        <h1 className="text-5xl font-bold text-center p-10 text-purple-500">
            Explore Cutting-edge-Gadgets
        </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
    {
       gadgets.map((gadget,index) => <Gadget key={index} gadget={gadget}></Gadget>) 
    }
    </div>
    </div>
  )
}

export default AllGadget