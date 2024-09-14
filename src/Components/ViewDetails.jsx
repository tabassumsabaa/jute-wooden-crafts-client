import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { MdAddToPhotos } from "react-icons/md";



const ViewDetails = () => {
  const itemDetails = useLoaderData(); 
  if (!itemDetails) {
    return <div>Error: Item details could not be loaded.</div>;
  }

  const { item_name, description, image, customization, stockStatus } = itemDetails;

  return (
    <div>
      <Navbar></Navbar>
      <div className="card card-side w-2/3 m-auto my-5 p-5 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name:{item_name}</h2>
          <p className="font-bold">Description:{description}</p>
          <div className="flex justify-between gap-2">
            <p className="">Customization: <span className="text-green-600">{customization}</span></p>
            <p className="">StockStatus: <span className="text-orange-500"> {stockStatus}</span></p>
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