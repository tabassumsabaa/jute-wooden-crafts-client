import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const UpdateCraft = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [craft, setCraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // ==========================================
  // Load Existing Craft
  // ==========================================

  useEffect(() => {
    fetch(`https://jute-wooden-craft-server-rw94.vercel.app/craft/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Craft not found");
        }

        return res.json();
      })
      .then((data) => {
        setCraft(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading craft:", error);
        setLoading(false);
      });
  }, [id]);

  // ==========================================
  // Update Craft
  // ==========================================

  const handleUpdateCraft = async (event) => {
    event.preventDefault();

    const form = event.target;

    const updatedCraft = {
      image: form.image.value.trim(),
      item_name: form.item_name.value.trim(),
      subcategory_Name: form.subcategory_Name.value,
      description: form.description.value.trim(),
      price: Number(form.price.value),
      rating: Number(form.rating.value),
      customization: form.customization.value,
      processing_time: form.processing_time.value.trim(),
      stockStatus: form.stockStatus.value,
    };

    try {
      setUpdating(true);

      const response = await fetch(
        `https://jute-wooden-craft-server-rw94.vercel.app/craft/${id}`,
        {
          method: "PUT",

          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(updatedCraft),
        }
      );

      if (!response.ok) {
        throw new Error("Update failed");
      }

      const data = await response.json();

      console.log("Update Result:", data);

      if (data.modifiedCount > 0) {
        await Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Your craft item has been updated successfully.",
          confirmButtonColor: "#d97706",
        });

        navigate("/my-crafts");
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "You didn't make any changes to this craft item.",
          confirmButtonColor: "#d97706",
        });
      }
    } catch (error) {
      console.error("Update error:", error);

      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "The craft item could not be updated.",
        confirmButtonColor: "#d97706",
      });
    } finally {
      setUpdating(false);
    }
  };

  // ==========================================
  // Loading
  // ==========================================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-amber-600"></span>
      </div>
    );
  }

  // ==========================================
  // Craft Not Found
  // ==========================================

  if (!craft) {
    return (
      <div className="min-h-screen bg-base-200">
        <Navbar />

        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center px-4">
            <div className="text-6xl mb-4">🧺</div>

            <h2 className="text-3xl font-bold">
              Craft Not Found
            </h2>

            <p className="mt-3 text-base-content/60">
              We could not find the craft item you want to update.
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

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-14">

        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-10">
          <p
            className="
              text-amber-600
              dark:text-amber-400
              uppercase
              tracking-[0.2em]
              text-sm
              font-semibold
            "
          >
            Edit Your Creation
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Update Craft Item
          </h1>

          <p className="mt-3 text-base-content/60">
            Make changes to your craft information and save your
            updated details.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleUpdateCraft}
          className="
            bg-base-100
            rounded-3xl
            border
            border-base-content/10
            shadow-xl
            p-6
            md:p-10
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Image URL */}

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Image URL
              </label>

              <input
                type="url"
                name="image"
                defaultValue={craft.image}
                className="input input-bordered w-full bg-base-100"
                required
              />
            </div>

            {/* Item Name */}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Item Name
              </label>

              <input
                type="text"
                name="item_name"
                defaultValue={craft.item_name}
                className="input input-bordered w-full bg-base-100"
                required
              />
            </div>

            {/* Subcategory */}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Subcategory
              </label>

              <select
                name="subcategory_Name"
                defaultValue={craft.subcategory_Name}
                className="select select-bordered w-full bg-base-100"
                required
              >
                <option value="Wooden Furniture & Sculptures">
                  Wooden Furniture & Sculptures
                </option>

                <option value="Wooden Home Decor">
                  Wooden Home Decor
                </option>

                <option value="Wooden Utensils and Kitchenware">
                  Wooden Utensils and Kitchenware
                </option>

                <option value="Jute Home Decor">
                  Jute Home Decor
                </option>

                <option value="Jute Kitchenware & Utensils">
                  Jute Kitchenware & Utensils
                </option>

                <option value="Jute and Wooden Jewellery">
                  Jute and Wooden Jewellery
                </option>
              </select>
            </div>

            {/* Price */}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Price ($)
              </label>

              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                defaultValue={craft.price}
                className="input input-bordered w-full bg-base-100"
                required
              />
            </div>

            {/* Rating */}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Rating
              </label>

              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                defaultValue={craft.rating}
                className="input input-bordered w-full bg-base-100"
                required
              />
            </div>

            {/* Customization */}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Customization Available?
              </label>

              <select
                name="customization"
                defaultValue={craft.customization}
                className="select select-bordered w-full bg-base-100"
                required
              >
                <option value="Yes">
                  Yes
                </option>

                <option value="No">
                  No
                </option>
              </select>
            </div>

            {/* Processing Time */}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Processing Time
              </label>

              <input
                type="text"
                name="processing_time"
                defaultValue={craft.processing_time}
                placeholder="Example: 3-5 days"
                className="input input-bordered w-full bg-base-100"
                required
              />
            </div>

            {/* Stock */}

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Stock Status
              </label>

              <select
                name="stockStatus"
                defaultValue={craft.stockStatus}
                className="select select-bordered w-full bg-base-100"
                required
              >
                <option value="In Stock">
                  In Stock
                </option>

                <option value="Made to Order">
                  Made to Order
                </option>
              </select>
            </div>

          </div>

          {/* Description */}

          <div className="mt-6">
            <label className="block text-sm font-semibold mb-2">
              Short Description
            </label>

            <textarea
              name="description"
              rows="5"
              defaultValue={craft.description}
              className="textarea textarea-bordered w-full bg-base-100"
              required
            />
          </div>

          {/* User information */}

          <div
            className="
              mt-6
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
              p-5
              rounded-2xl
              bg-base-200
            "
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-base-content/50">
                Craft Owner
              </p>

              <p className="font-semibold mt-1">
                {craft.userName || "User"}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-base-content/50">
                Email
              </p>

              <p className="font-semibold mt-1 break-all">
                {craft.userEmail}
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

            <button
              type="button"
              onClick={() => navigate("/my-crafts")}
              className="btn btn-outline"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={updating}
              className="
                btn
                border-none
                bg-amber-600
                hover:bg-amber-700
                text-white
              "
            >
              {updating ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Updating...
                </>
              ) : (
                "Update Craft"
              )}
            </button>

          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default UpdateCraft;