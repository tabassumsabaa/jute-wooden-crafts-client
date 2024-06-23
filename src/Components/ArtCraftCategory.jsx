//import { useLoaderData } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
 import { useState } from "react";
import ListItems from "./ListItems";
import { useEffect } from "react";


const ArtCraftCategory = () => {
    // const loadedArtCraft = useLoaderData();
   // const craftItems = useLoaderData();
    //console.log(craftItems);
    const [craftItems, setCraftItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/listItems')
          .then(res => res.json())
          .then(data =>{            
            setCraftItems(data)
          })
    })

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className=" w-3/5 m-auto my-10 p-5 ">
               <h2 className="text-center text-3xl font-semibold text-slate-950">Home Decor With Wooden Craft: {craftItems.length}</h2>
               <div className="grid grid-rows-1  gap-4">
                {
                    craftItems.map(craftItem => <ListItems 
                        key={craftItem._id}
                        craftItem={craftItem}  
                        craftItems={craftItems}                        
                        // setCraftItems={setCraftItems}
                        ></ListItems>)
                }
               </div>
            </div>  
            {/* <Footer></Footer>  */}
        </div>
    );
};

export default ArtCraftCategory;
