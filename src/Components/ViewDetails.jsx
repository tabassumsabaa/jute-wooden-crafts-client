import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MdAddToPhotos } from "react-icons/md";


const ViewDetails = () => {
    const listItems = useLoaderData();
    const { item_name, description, image, customization, stockStatus } = listItems;

 
    return (
        <div>
            <Navbar></Navbar>
            <div className="card card-side w-2/3 m-auto my-5 p-5 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name:{item_name}</h2>
    <p>Description:{description}</p>
    <div className="flex justify-between gap-2">
      <p className="">Customization: {customization}</p>
      <p className="">StockStatus: {stockStatus}</p>                      
    </div>
    <div className="card-actions my-5">
      <Link to="/listItems"><button className="btn btn-outline bg-slate-100 hover: text-slate-800 rounded-3xl"><MdAddToPhotos></MdAddToPhotos>Add</button></Link>
    </div>
  </div>
</div> 
      <Footer></Footer>
        </div>
    );
};

export default ViewDetails;