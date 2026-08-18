import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ViewDetails = () => {
  const { id } = useParams();

  const [craft, setCraft] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jute-wooden-craft-server-rw94.vercel.app/craft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading craft details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-amber-600"></span>
      </div>
    );
  }

  if (!craft || !craft._id) {
    return (
      <div className="min-h-screen bg-base-200 text-base-content">
        <Navbar />

        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">🧺</div>

            <h2 className="text-3xl font-bold">
              Craft Item Not Found
            </h2>

            <p className="mt-3 text-base-content/60">
              The craft item you are looking for does not exist.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            bg-base-100
            border
            border-base-content/10
            rounded-3xl
            shadow-xl
            overflow-hidden
          "
        >

          {/* IMAGE */}
          <div className="bg-base-200">
            <img
              src={craft.image}
              alt={craft.item_name}
              className="
                w-full
                h-full
                min-h-[400px]
                max-h-[650px]
                object-cover
              "
            />
          </div>

          {/* DETAILS */}
          <div className="p-6 md:p-10 flex flex-col justify-center">

            {/* Category */}
            <p
              className="
                text-amber-600
                uppercase
                tracking-[0.18em]
                text-sm
                font-semibold
              "
            >
              {craft.subcategory_Name}
            </p>

            {/* Item Name */}
            <h1
              className="
                text-3xl
                md:text-4xl
                font-bold
                mt-2
                text-base-content
              "
            >
              {craft.item_name}
            </h1>

            {/* Price + Rating */}
            <div className="flex flex-wrap items-center gap-5 mt-5">
              <p className="text-3xl font-bold text-amber-600">
                ${craft.price}
              </p>

              <p
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-amber-500/10
                  text-amber-600
                  font-semibold
                "
              >
                ⭐ {craft.rating}
              </p>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h3 className="font-semibold text-lg mb-2">
                Description
              </h3>

              <p className="text-base-content/65 leading-7">
                {craft.description}
              </p>
            </div>

            {/* DETAILS GRID */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                mt-8
              "
            >
              {/* Customization */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-base-200
                  border
                  border-base-content/10
                "
              >
                <p className="text-xs uppercase tracking-wider text-base-content/50">
                  Customization
                </p>

                <p className="font-semibold mt-1">
                  {craft.customization}
                </p>
              </div>

              {/* Processing Time */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-base-200
                  border
                  border-base-content/10
                "
              >
                <p className="text-xs uppercase tracking-wider text-base-content/50">
                  Processing Time
                </p>

                <p className="font-semibold mt-1">
                  {craft.processing_time}
                </p>
              </div>

              {/* Stock */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-base-200
                  border
                  border-base-content/10
                "
              >
                <p className="text-xs uppercase tracking-wider text-base-content/50">
                  Stock Status
                </p>

                <p className="font-semibold mt-1 text-amber-600">
                  {craft.stockStatus}
                </p>
              </div>

              {/* Added By */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-base-200
                  border
                  border-base-content/10
                "
              >
                <p className="text-xs uppercase tracking-wider text-base-content/50">
                  Added By
                </p>

                <p className="font-semibold mt-1">
                  {craft.userName}
                </p>
              </div>
            </div>

            {/* User Email */}
            <div
              className="
                mt-5
                p-4
                rounded-2xl
                border
                border-amber-500/20
                bg-amber-500/5
              "
            >
              <p className="text-xs uppercase tracking-wider text-base-content/50">
                Creator Contact
              </p>

              <p className="font-medium mt-1 break-all">
                {craft.userEmail}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViewDetails;