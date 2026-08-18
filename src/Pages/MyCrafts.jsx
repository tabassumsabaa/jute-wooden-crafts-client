import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../AuthProvider";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);

  const [crafts, setCrafts] = useState([]);
  const [filteredCrafts, setFilteredCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://jute-wooden-craft-server-rw94.vercel.app/myCrafts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
        setFilteredCrafts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading user's crafts:", error);
        setLoading(false);
      });
  }, [user?.email]);

  const handleFilter = (value) => {
    setFilter(value);

    if (value === "All") {
      setFilteredCrafts(crafts);
      return;
    }

    const filtered = crafts.filter(
      (craft) => craft.customization === value
    );

    setFilteredCrafts(filtered);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This craft item will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d97706",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, delete it",
    });

    if (!result.isConfirmed) return;

    try {
      const response = await fetch(
        `https://jute-wooden-craft-server-rw94.vercel.app/craft/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.deletedCount > 0) {
        const remaining = crafts.filter(
          (craft) => craft._id !== id
        );

        setCrafts(remaining);

        if (filter === "All") {
          setFilteredCrafts(remaining);
        } else {
          setFilteredCrafts(
            remaining.filter(
              (craft) => craft.customization === filter
            )
          );
        }

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The craft item has been removed.",
          confirmButtonColor: "#d97706",
        });
      }
    } catch (error) {
      console.error("Delete error:", error);

      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "The craft item could not be deleted.",
        confirmButtonColor: "#d97706",
      });
    }
  };

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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">

          <div>
            <p className="text-amber-600 uppercase tracking-[0.2em] text-sm font-semibold">
              Personal Collection
            </p>

            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              My Art & Craft List
            </h1>

            <p className="mt-3 text-base-content/60">
              Manage the craft items you have added.
            </p>
          </div>

          {/* Filter */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-base-content/50 mb-2">
              Filter by Customization
            </label>

            <select
              value={filter}
              onChange={(e) => handleFilter(e.target.value)}
              className="select select-bordered bg-base-100 min-w-[210px]"
            >
              <option value="All">All Items</option>
              <option value="Yes">Customization: Yes</option>
              <option value="No">Customization: No</option>
            </select>
          </div>
        </div>

        {/* Empty */}
        {filteredCrafts.length === 0 ? (
          <div className="text-center bg-base-100 rounded-3xl p-10 border border-base-content/10 shadow-md">

            <div className="text-5xl mb-4">
              🧺
            </div>

            <h2 className="text-2xl font-bold">
              No Craft Items Found
            </h2>

            <p className="text-base-content/60 mt-2">
              You do not have any craft items for this filter.
            </p>

            <Link
              to="/add-craft"
              className="btn mt-6 bg-amber-600 hover:bg-amber-700 border-none text-white"
            >
              Add Your First Craft
            </Link>
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {filteredCrafts.map((craft) => (
              <div
                key={craft._id}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-base-100
                  border
                  border-base-content/10
                  shadow-md
                  hover:shadow-xl
                  transition
                "
              >
                {/* Image */}
                <img
                  src={craft.image}
                  alt={craft.item_name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">

                  <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold">
                    {craft.subcategory_Name}
                  </p>

                  <h2 className="text-xl font-bold mt-2">
                    {craft.item_name}
                  </h2>

                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="font-bold text-amber-600">
                      ${craft.price}
                    </span>

                    <span>
                      ⭐ {craft.rating}
                    </span>
                  </div>

                  <div className="mt-4 flex gap-2 flex-wrap">

                    <span
                      className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        bg-base-200
                      "
                    >
                      Customization: {craft.customization}
                    </span>

                    <span
                      className="
                        px-3 py-1
                        rounded-full
                        text-xs
                        bg-base-200
                      "
                    >
                      {craft.stockStatus}
                    </span>

                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-6">

                    <Link
                      to={`/update-craft/${craft._id}`}
                      className="
                        btn
                        btn-sm
                        bg-amber-600
                        hover:bg-amber-700
                        border-none
                        text-white
                      "
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(craft._id)}
                      className="
                        btn
                        btn-sm
                        bg-red-500
                        hover:bg-red-600
                        border-none
                        text-white
                      "
                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default MyCrafts;