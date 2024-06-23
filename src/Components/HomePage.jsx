import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import CraftItem from "./CraftItem";
import Footer from "./Footer";
import { useState } from "react";
import ArtCraftCategory from "./ArtCraftCategory";
import Banner from "./Banner";


const HomePage = () => {
    const loadedcrafts = useLoaderData();
    const [crafts , setCrafts] = useState(loadedcrafts);
    // const loadedArtCraft = useLoaderData(loadedArtCraft);
   
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            <div className="container m-auto text-center">
                <h2 className="text-3xl mt-10">Eyes Pick Items: {crafts.length}</h2>
                <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 "> 
                {
                    crafts.map(craft => <CraftItem 
                        key={craft._id}
                        craft={craft} 
                        crafts={crafts} 
                        setCrafts={setCrafts}                     
                    ></CraftItem> )
                }
                </div>
            </div>

            <div className="my-10">
                <h2 className="bg-base-200 text-5xl text-center p-5 font-bold">Home Decor</h2>
                <div>
                    <ArtCraftCategory></ArtCraftCategory>
                </div>                
            </div>

            <Footer></Footer>
        </div>
    );
};

export default HomePage;
