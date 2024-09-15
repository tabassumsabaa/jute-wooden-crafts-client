import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";


const AllCraftItems = ({ items }) => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        // Fetch craft items
        const fetchCraftItems = fetch('https://jute-wooden-craft-server.vercel.app/listItems')
            .then(response => response.json());

        // Fetch kitchen items
        const fetchKitchenItems = fetch('https://jute-wooden-craft-server.vercel.app/kitchen')
            .then(response => response.json());

        // Fetch jute home items
        const fetchJuteHomeItems = fetch('https://jute-wooden-craft-server.vercel.app/jutehome')
            .then(response => response.json());

        // Combine all datasets
        Promise.all([fetchCraftItems, fetchKitchenItems, fetchJuteHomeItems])
            .then(([craftItems, kitchenItems, juteHomeItems]) => {
                // Combine all into one array
                const combinedItems = [...craftItems, ...kitchenItems, ...juteHomeItems];
                setAllItems(combinedItems);
            })
            .catch(error => console.error("Error fetching items:", error));
    }, []);
      // Function to determine the stock status color
      const getStockStatusClass = (status) => {
        console.log("Stock Status:", status); 
        switch (status.toLowerCase()) {
           case "yes":
        case "in stock":
                return "text-green-500 font-bold";
            case "limited stock":
                return "text-orange-500 font-bold";
            case "no":
                return "text-red-500 font-bold";
            default:
                return ""; 
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="container mx-auto my-10">
                    <h1 className="text-2xl font-bold mb-6 text-center">All Craft Items</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                            <thead className=" bg-red-200 p-5 text-xl">
                                <tr>
                                    <th className="py-2 px-4 border-b">Image</th>
                                    <th className="py-2 px-4 border-b">Item Name</th>
                                    <th className="py-2 px-4 border-b">Sub Category</th>
                                    <th className="py-2 px-4 border-b">Stock Status</th>
                                    <th className="py-2 px-4 border-b">Customization</th>
                                    <th className="py-2 px-4 border-b"> Rating </th>
                                    <th className="py-2 px-4 border-b">Price</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {Array.isArray(allItems) && allItems.length > 0 ? (
                                    allItems.map((item) => (
                                        <tr key={item._id}>
                                            <td className="border px-4 py-2">
                                                <img src={item.image} alt={item.item_name} className="w-16 h-16 object-cover rounded-full" />
                                            </td>
                                            <td className="border px-4 py-2">{item.item_name}</td>
                                            <td className="border px-4 py-2">{item.subcategory_Name}</td>
                                            <td className={`border px-4 py-2 ${getStockStatusClass(item.stockStatus)}`}>
                                                {item.stockStatus}
                                            </td>
                                            <td className="border px-4 py-2">{item.customization}</td>
                                            <td className="border px-4 py-2 text-yellow-500">{item.rating} <MdStarRate /></td>
                                            <td className="border px-4 py-2 text-red-500 font-bold">${item.price}</td>
                                            <td className="border px-4 py-2">
                                                <Link to={`/view/${item._id}`}>
                                                    <button className="btn btn-outline bg-slate-100 hover: text-slate-800 rounded-3xl">
                                                        View Details
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center py-4">
                                            No Items Available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllCraftItems;