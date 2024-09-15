import { useState } from "react";
import ListItems from "./ListItems";
import { useEffect } from "react";
import KitchenWood from "./KitchenWood";
import JuteHome from "./JuteHome";


const ArtCraftCategory = () => {

    const [craftItems, setCraftItems] = useState([]);
    const [kitchens, setKitchens] = useState([]);
    const [juteItems, setJuteItems] = useState([]);

    useEffect(() => {
        fetch('https://jute-wooden-craft-server.vercel.app/listItems')
            .then(res => res.json())
            .then(data => {
                setCraftItems(data)
            })
    })
    useEffect(() => {
        fetch('https://jute-wooden-craft-server.vercel.app/kitchen')
            .then(res => res.json())
            .then(data => setKitchens(data))
            .catch(err => console.error('Failed to fetch kitchen data', err));
    }, []);

    useEffect(() => {
        fetch('https://jute-wooden-craft-server.vercel.app/jutehome')
            .then(res => res.json())
            .then(data => setJuteItems(data))
            .catch(err => console.error('Failed to fetch jute home data', err));
    }, []);

    return (
        <div>
            <div className="  ">
                <h2 className="text-center text-3xl font-semibold text-slate-950 my-5">Home Decor With Wooden Craft: {craftItems.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-red-200 my-10 p-5">
                    {
                        craftItems.map(craftItem => <ListItems
                            key={craftItem._id}
                            craftItem={craftItem}
                            craftItems={craftItems}
                        ></ListItems>)
                    }
                </div>
            </div>

            <div className="  ">
                <h2 className="text-center text-3xl font-semibold text-slate-950 my-5">Kitchen Wooden Craft: {kitchens.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-blue-200 p-5">
                    {kitchens.map(kitchen => (
                        <KitchenWood key={kitchen._id} kitchenItem={kitchen} />
                    ))}
                </div>
            </div>

            <div className="  ">
                <h2 className="text-center text-3xl font-semibold text-slate-950 my-5">Jute Home Craft: {kitchens.length}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-purple-300 p-5">
                    {juteItems.map(jute => (
                        <JuteHome key={jute._id} juteItem={jute} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ArtCraftCategory;
