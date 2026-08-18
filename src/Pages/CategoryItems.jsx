import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CategoryItems = () => {
  const { subcategory } = useParams();

  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryName = decodeURIComponent(subcategory);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://jute-wooden-craft-server-rw94.vercel.app/category/${encodeURIComponent(
        categoryName
      )}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load category items");
        }

        return res.json();
      })
      .then((data) => {
        setCrafts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Category Error:", error);
        setLoading(false);
      });
  }, [categoryName]);

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
        <div className="text-center max-w-3xl mx-auto mb-10">

          <p
            className="
              text-amber-600
              uppercase
              tracking-[0.2em]
              text-sm
              font-semibold
            "
          >
            Explore Collection
          </p>

          <h1
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              mt-2
            "
          >
            {categoryName}
          </h1>

          <p className="mt-3 text-base-content/60">
            Discover handmade craft items from this collection.
          </p>

        </div>

        {/* Number of Items */}
        <div
          className="
            mb-7
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-sm text-base-content/60">
            {crafts.length}{" "}
            {crafts.length === 1 ? "item" : "items"} found
          </p>

          <Link
            to="/all-crafts"
            className="
              text-sm
              font-semibold
              text-amber-600
              hover:underline
            "
          >
            View All Crafts →
          </Link>
        </div>

        {/* Empty Category */}
        {crafts.length === 0 ? (
          <div
            className="
              max-w-xl
              mx-auto
              text-center
              p-10
              rounded-3xl
              bg-base-100
              border
              border-base-content/10
              shadow-md
            "
          >
            <div className="text-6xl mb-5">
              🧺
            </div>

            <h2 className="text-2xl font-bold">
              No Crafts Found
            </h2>

            <p className="mt-3 text-base-content/60">
              No items have been added to this category yet.
            </p>

            <Link
              to="/add-craft"
              className="
                btn
                mt-6
                border-none
                bg-amber-600
                hover:bg-amber-700
                text-white
              "
            >
              Add a Craft
            </Link>
          </div>
        ) : (

          /* Category Cards */

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-7
            "
          >
            {crafts.map((craft) => (
              <div
                key={craft._id}
                className="
                  group
                  overflow-hidden
                  rounded-3xl

                  bg-base-100

                  border
                  border-base-content/10

                  shadow-md

                  hover:shadow-xl
                  hover:-translate-y-1

                  transition-all
                  duration-300
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={craft.image}
                    alt={craft.item_name}
                    className="
                      w-full
                      h-60
                      object-cover

                      group-hover:scale-105

                      transition-transform
                      duration-500
                    "
                  />

                  {/* Stock */}
                  <span
                    className="
                      absolute
                      top-4
                      right-4

                      px-3
                      py-1

                      rounded-full

                      bg-base-100/90
                      backdrop-blur

                      text-xs
                      font-semibold

                      text-amber-600
                    "
                  >
                    {craft.stockStatus}
                  </span>

                </div>

                {/* Content */}
                <div className="p-6">

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wider
                      font-semibold
                      text-amber-600
                    "
                  >
                    {craft.subcategory_Name}
                  </p>

                  <h2
                    className="
                      text-xl
                      font-bold
                      mt-2
                    "
                  >
                    {craft.item_name}
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      text-base-content/60
                      leading-6
                      line-clamp-2
                    "
                  >
                    {craft.description}
                  </p>

                  {/* Price and rating */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mt-5
                    "
                  >
                    <p
                      className="
                        text-xl
                        font-bold
                        text-amber-600
                      "
                    >
                      ${craft.price}
                    </p>

                    <p className="text-sm">
                      ⭐ {craft.rating}
                    </p>
                  </div>

                  {/* Details */}
                  <Link
                    to={`/view/${craft._id}`}
                    className="
                      btn
                      w-full
                      mt-6

                      border-none

                      bg-amber-600
                      hover:bg-amber-700

                      text-white
                    "
                  >
                    View Details
                  </Link>

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

export default CategoryItems;