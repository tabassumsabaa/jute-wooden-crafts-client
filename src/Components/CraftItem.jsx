import { Link } from "react-router-dom";
import { CiBadgeDollar } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import Swal from "sweetalert2";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";



const CraftItem = ({ craft, crafts, setCrafts }) => {


  const { _id, item_name, subcategory_Name, description, processing_time, price, rating, customization, stockStatus, image } = craft;
  const { user } = useContext(AuthContext);

  const handleDelete = _id => {
      if (!user) {
        Swal.fire("You must be logged in to delete items!");
        return;
      }    
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://jute-wooden-craft-server.vercel.app/craft/${_id}`, {
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success"
              });
            }
          });
        }
      });
    };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-5">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title uppercase">Name: {item_name}</h2>
          <p className=""> Description: {description}</p>
          <p className="">Subcategory:{subcategory_Name}</p>
          <div className="flex justify-between gap-3">
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
          <div>
            <div className="join join-vertical lg:join-horizontal ">
              <Link to={`updatecraft/${_id}`}> <button className="btn join-item"><FiEdit></FiEdit></button> </Link>
              <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-500"><RiDeleteBin5Line></RiDeleteBin5Line></button>
            </div>
          </div>

          <div className="card-actions mt-5">
            <Link to={`/more/${_id}`}><button className="btn btn-outline bg-slate-100 hover: text-slate-800 rounded-3xl">More Details <IoIosMore></IoIosMore></button></Link>
          </div>
        </div>
        <div className="mb-6">
          <Link to={`/artCraftCategory`} ><button className="btn btn-outline bg-slate-100 hover: text-slate-800 rounded-3xl">All Items <IoIosMore></IoIosMore></button></Link>
        </div>
      </div>
    </div>
  );
};

export default CraftItem;