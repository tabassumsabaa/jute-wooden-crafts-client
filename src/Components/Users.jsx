import {  useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    
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
          
          fetch(`https://jute-wooden-craft-server.vercel.app/users/${_id}`, {
              method: 'DELETE'                
          })
              .then(res => res.json())
              .then(data =>{
                  console.log(data);
                 if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your user has been deleted.",
                        icon: "success"
                      });
                      const remainingUsers = users.filter(user => user._id !== _id);
                      setUsers(remainingUsers);
                     
                  }
          })
          }
        });
  
      }

    return (
        <div >
          <Navbar></Navbar>
          <div className="w-3/4 m-auto py-5">
          <h2 className="text-2xl text-center mb-3">Users: {loadedUsers.length}</h2>
         
           
            <div className="overflow-x-auto">
  <table className="table">
     <thead>
       <tr>
         <th>#</th>
        <th>Email</th>       
          <th>Created At:</th>
         <th>Last Logged In:</th>
         <th>Action</th>
        < th></th>
      </tr >
    </thead >
    <tbody> 
      {/* row 1 */}
      { 
         users.map( (user, i) => <tr key={user._id}>
             <th>{i + 1}</th>
             <td>{user.email}</td>
             <td></td>
             <td>{user.createdAt}</td>
            < td>
                 <button onClick={() => handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>) 
      } 
  
     </tbody>  
     
  </table>
</div>
  </div>
  <Footer></Footer>
      </div>
    );
  };
export default Users;