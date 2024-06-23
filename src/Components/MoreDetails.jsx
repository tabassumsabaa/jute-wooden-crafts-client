import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { CiBadgeDollar } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { MdAddToPhotos } from "react-icons/md";


const MoreDetails = () => {
    const craft = useLoaderData();
    const { item_name, description, image, subcategory_Name, processing_time, price, rating, customization, stockStatus } = craft;
    return (
        <div>
          <div>
            <Navbar></Navbar>
            <div className="card w-96 m-auto my-5 p-5 bg-base-100 shadow-xl mb-5">
              <figure className="px-10 pt-10"><img src={image} alt="Movie"/></figure>
              <div className="card-body text-center">
                 <h2 className="card-title uppercase ">Name:{item_name}</h2>
                 <p className="capitalize" >Description: {description}</p>
                 <p className="">Subcategory: {subcategory_Name}</p>
                 <div className="flex justify-between gap-2">
                    <p className="">Customization: {customization}</p>
                    <p className="">StockStatus: {stockStatus}</p>                        
                 </div>
                 <div className="flex justify-between gap-3 mb-5">
        <div className="flex justify-between items-center text-stone-800">
            <CiBadgeDollar></CiBadgeDollar>
            <p className="text-slate-950">Price: ${price}</p>
        </div>
        <div className="flex justify-between items-center text-amber-500">
            <MdStarRate></MdStarRate>
            <p className="text-slate-950">Rate:{rating}</p>
        </div>
        <div className="flex justify-between items-center text-green-500">
            <IoIosTimer></IoIosTimer> 
            <p className="text-slate-950">Time:{processing_time}</p>
        </div>        
                </div>  
                 <div className="card-actions justify-center my-5 ">
                    <Link to="/addcraft"><button className="btn btn-outline bg-slate-100 hover: text-slate-800 rounded-3xl"><MdAddToPhotos></MdAddToPhotos>Add Craft</button></Link>
                 </div>
              </div>
            </div> 
            <Footer></Footer>
           </div>
        </div>
    );
};

export default MoreDetails;