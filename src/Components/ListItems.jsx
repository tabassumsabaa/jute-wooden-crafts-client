import { Link } from "react-router-dom";
import { CiBadgeDollar } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import Swal from "sweetalert2";


const ListItems = ({craftItem}) => {

     const {_id, item_name, subcategory_Name, description, processing_time, price, rating, customization, stockStatus, image } = craftItem ||{}

    const handleDelete = _id =>{
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
        fetch(`http://localhost:5000/listItems/${_id}`, {
            method: 'DELETE'                
        })
            .then(res => res.json())
            .then(data =>{
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
              <figure><img src={image} alt="Movie"/></figure>
              <div className="card-body ">
                <h2 className="card-title uppercase ">Name:{item_name}</h2>
                <p className="">Customization:{customization}</p>
                <p className="">Status:{stockStatus}</p>
                <p className="">Sub Category:{subcategory_Name}</p>
                <p className="">Description:{description}</p>
                <div className="flex justify-between gap-3 mb-5">
        <div className="flex justify-between items-center text-stone-800">
            <CiBadgeDollar></CiBadgeDollar>
            <p className="text-slate-950">Price:${price}</p>
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