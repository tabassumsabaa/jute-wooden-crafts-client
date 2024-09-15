import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Swal from "sweetalert2";


const UpdateCraft = () => {
    
    const craft = useLoaderData();
    const {_id, item_name, subcategory_Name, description, processing_time, price, rating, customization, stockStatus, image} = craft;

    const handleUpdateCraft = event =>{
        event.preventDefault();
    
        const form =event.target;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const description = form.description.value;
        const processing_time = form.processing_time.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value
        const image = form.image.value;
    
        const updatedCraft = {item_name, subcategory_Name, description, processing_time, price, rating, customization, stockStatus, image};
        console.log(updatedCraft);

        //send to  the server
        fetch(`https://jute-wooden-craft-server.vercel.app/craft/${_id}` , {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCraft)
        })
          .then(res =>res.json())
          .then(data =>{
              console.log(data);
              if (data.modifiedCount > 0 ) {            
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })              
              }
        })
    }   

   

    return (
        <div>
        <Navbar></Navbar>
         <div className="bg-[F4F3F0] my-10">
      <div className="text-center my-4">
        <h2 className="text-3xl font-bold font-serif mb-2 text-slate-900">Update Craft Item</h2>
        <p className=" w-3/4 mx-auto text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis eius officiis corrupti excepturi fuga? Sint recusandae dolores maiores possimus maxime itaque nam commodi quasi corporis, quae asperiores perferendis est?</p>      
      </div>   
      <form onSubmit={handleUpdateCraft} className="card-body w-[80%] mx-auto ">       
       <div className="form-control bg-base-200"> 
        <div className="card shadow-2xl p-10">     
         <div className="md:grid grid-cols-2 gap-2">
           <div className="mr-8 w-full mb-2">
             <div className="form-control">
         <label className="label">
           <span className="label-text">Item Name</span>
         </label>          
         <input type="text" name="item_name" defaultValue={item_name} placeholder="Item Name"className="input input-bordered" required />       
             </div>
             <div className="form-control">
         <label className="label">
           <span className="label-text">Sub Category</span>
         </label>
         <input type="text" name="subcategory_Name" defaultValue={subcategory_Name} placeholder="Subcategory Name" className="input input-bordered" required />          
             </div>  
             <div className="form-control">
         <label className="label">
           <span className="label-text">Description</span>
         </label>
         <input type="text"  name="description" defaultValue={description} placeholder="Description" className="input input-bordered" required />          
             </div>
             <div className="form-control">
         <label className="label">
           <span className="label-text">Processing Time</span>
         </label>
         <input type="text" name="processing_time" defaultValue={processing_time} placeholder="Processing Time"className="input input-bordered" required />          
             </div>
           </div> 
           <div className="w-full mb-2">
             <div className="form-control">
         <label className="label">
           <span className="label-text">Price $</span>
         </label>
         <input type="number" name="price" defaultValue={price} placeholder="Price"  className="input input-bordered" required />
             </div>
             <div className="form-control">
         <label className="label">
           <span className="label-text">Rating</span>
         </label>
         <input  type="number" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered" required />          
             </div>  
             <div className="form-control">
         <label className="label">
           <span className="label-text">Customization</span>
         </label>
         <input type="text" name="customization" defaultValue={customization} placeholder="Customization" className="input input-bordered" required />          
             </div>
             <div className="form-control">
         <label className="label">
           <span className="label-text">Stock Status</span>
         </label>
         <input type="text" name="stockStatus" defaultValue={stockStatus} placeholder="Stock Status"className="input input-bordered" required />          
             </div>
          </div>
         </div>  
        <div className="form-control">
         <label className="label">
           <span className="label-text">Photo URL</span>
         </label>
         <input type="url" name="image" defaultValue={image} placeholder="Enter Coffee Photo" className="input input-bordered w-full " required />    
         <div className="mb-10  mt-12">            
           <input type="submit" value="Update Craft" className="btn-secondary w-full p-2 bg-slate-900 border-slate-950"/>
       </div>      
       </div>         
     </div>       
    </div>                     
      </form>
         </div>
       <Footer></Footer>
      </div>
    );
};

export default UpdateCraft;