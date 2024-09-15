import { Link } from "react-router-dom";
import { CiBadgeDollar } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import Swal from "sweetalert2";


const ListItems = ({ craftItem }) => {

  const { _id, item_name, subcategory_Name, description, processing_time, price, rating, customization, stockStatus, image } = craftItem || {}

  const handleDelete = _id => {
    console.log(_id);
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

        // console.log('delete confirm');
        fetch(`https://jute-wooden-craft-server.vercel.app/listItems/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success"
              });

            }
          })
      }
    });

  }

  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">         
          <div className="card-body ">
          <figure><img src={image} alt="Movie" className="card-image h-svh" /></figure>
            <h2 className="card-title uppercase font-bold">Name: <span className="text-green-600">{item_name}</span></h2>
            <p className="font-bold">Customization:<span className="text-green-600">{customization}</span></p>
            <p className="font-bold">Status:<span className="text-green-600">{stockStatus}</span></p>
            <p className="font-bold">Sub Category: <span className="text-green-600">{subcategory_Name}</span></p>
            <p className="font-bold">Description:<span className="text-green-600">{description}</span></p>
            <div className="flex justify-between gap-3 mb-5">
              <div className="flex justify-between items-center text-stone-800">
                <CiBadgeDollar></CiBadgeDollar>
                <p className="text-slate-950 font-bold">Price:$ <span className="text-red-600">{price}</span></p>
              </div>
              <div className="flex justify-between items-center text-amber-500">
                <MdStarRate></MdStarRate>
                <p className="text-slate-950 font-bold">Rate: <span className="text-red-600">{rating}</span></p>
              </div>
              <div className="flex justify-between items-center text-green-500">
                <IoIosTimer></IoIosTimer>
                <p className="text-slate-950 font-bold">Time: <span className="text-red-600">{processing_time}</span></p>
              </div>
            </div>

            <div>
              <div className="join join-vertical lg:join-horizontal ">
                <Link to="/listItems"> <button className="btn join-item "><IoIosAddCircleOutline></IoIosAddCircleOutline></button> </Link>
                <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-500"><RiDeleteBin5Line></RiDeleteBin5Line></button>
              </div>
            </div>


            <div className="card-actions justify-center my-5">
              <Link to={`/view/${_id}`}><button className="btn btn-outline bg-slate-100 hover: text-slate-800 rounded-3xl">View Details</button></Link>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default ListItems;