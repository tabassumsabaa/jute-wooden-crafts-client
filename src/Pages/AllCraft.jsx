import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AllCraft = () => {
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jute-wooden-craft-server-rw94.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading crafts:", error);
        setLoading(false);
      });
  }, []);

  // Search by item name
  const filteredCrafts = crafts.filter((craft) =>
    craft.item_name
      ?.toLowerCase()
      .includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-amber-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-amber-600 uppercase tracking-[0.2em] text-sm font-semibold">
            Explore Our Collection
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            All Art & Craft Items
          </h1>

          <p className="mt-3 text-base-content/60">
            Browse all handmade jute and wooden craft items added by our
            users.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search crafts by item name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="
              input
              input-bordered
              w-full
              bg-base-100
              focus:border-amber-500
            "
          />
        </div>

        {/* No Data */}
        {filteredCrafts.length === 0 ? (
          <div
            className="
              max-w-xl
              mx-auto
              bg-base-100
              border
              border-base-content/10
              rounded-3xl
              shadow-md
              text-center
              p-10
            "
          >
            <div className="text-5xl mb-4">🪵</div>

            <h2 className="text-2xl font-bold">
              No Crafts Found
            </h2>

            <p className="mt-2 text-base-content/60">
              {searchText
                ? `No craft item matches "${searchText}".`
                : "No craft items have been added yet."}
            </p>
          </div>
        ) : (
          <div
            className="
              overflow-x-auto
              bg-base-100
              border
              border-base-content/10
              rounded-3xl
              shadow-lg
            "
          >
            <table className="table">
              {/* Table Head */}
              <thead>
                <tr className="text-base-content/70">
                  <th>Image</th>
                  <th>Item Name</th>
                  <th>Subcategory</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {filteredCrafts.map((craft) => (
                  <tr
                    key={craft._id}
                    className="hover:bg-base-200/60"
                  >
                    {/* Image */}
                    <td>
                      <img
                        src={craft.image}
                        alt={craft.item_name}
                        className="
                          w-16
                          h-16
                          object-cover
                          rounded-xl
                        "
                      />
                    </td>

                    {/* Item Name */}
                    <td className="font-semibold">
                      {craft.item_name}
                    </td>

                    {/* Subcategory */}
                    <td className="max-w-[220px]">
                      {craft.subcategory_Name}
                    </td>

                    {/* Price */}
                    <td className="font-semibold text-amber-600">
                      ${craft.price}
                    </td>

                    {/* Rating */}
                    <td>
                      ⭐ {craft.rating}
                    </td>

                    {/* Stock */}
                    <td>
                      <span
                        className="
                          inline-block
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          bg-amber-500/10
                          text-amber-600
                        "
                      >
                        {craft.stockStatus}
                      </span>
                    </td>

                    {/* View Details */}
                    <td>
                      <Link
                        to={`/view/${craft._id}`}
                        className="
                          btn
                          btn-sm
                          border-none
                          bg-amber-600
                          hover:bg-amber-700
                          text-white
                        "
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default AllCraft;