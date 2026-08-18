import { useContext, useState } from "react";
import Swal from "sweetalert2";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Example items for each subcategory
  const itemExamples = {
    "Wooden Furniture & Sculptures":
      "Examples: Wooden Stool, Wooden Chair, Wooden Sculpture, Wooden Side Table",

    "Wooden Home Decor":
      "Examples: Wooden Wall Decor, Candle Holder, Photo Frame, Decorative Shelf",

    "Wooden Utensils and Kitchenware":
      "Examples: Wooden Serving Board, Spoon Set, Wooden Bowl, Cutting Board",

    "Jute Home Decor":
      "Examples: Jute Wall Basket, Storage Basket, Plant Holder, Jute Rug",

    "Jute Kitchenware & Utensils":
      "Examples: Jute Table Mat, Coaster Set, Table Runner, Cutlery Holder",

    "Jute and Wooden Jewellery":
      "Examples: Jute Necklace, Wooden Earrings, Bracelet, Handmade Pendant",
  };

  const handleAddCraft = async (event) => {
    event.preventDefault();

    const form = event.target;

    const newCraft = {
      image: form.image.value.trim(),
      item_name: form.item_name.value.trim(),
      subcategory_Name: form.subcategory_Name.value,
      description: form.description.value.trim(),
      price: Number(form.price.value),
      rating: Number(form.rating.value),
      customization: form.customization.value,
      processing_time: form.processing_time.value.trim(),
      stockStatus: form.stockStatus.value,

      // Logged-in user's information
      userEmail: user?.email,
      userName: user?.displayName || "Anonymous User",
    };

    console.log("New Craft:", newCraft);

    try {
      setLoading(true);

      const response = await fetch("https://jute-wooden-craft-server-rw94.vercel.app/craft", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCraft),
      });

      if (!response.ok) {
        throw new Error("Failed to add craft item");
      }

      const data = await response.json();

      if (data.insertedId) {
        await Swal.fire({
          icon: "success",
          title: "Craft Added!",
          text: "Your craft item has been added successfully.",
          confirmButtonColor: "#d97706",
        });

        form.reset();
        setSelectedCategory("");
      }
    } catch (error) {
      console.error("Add Craft Error:", error);

      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: "The craft item could not be added. Please try again.",
        confirmButtonColor: "#d97706",
      });
    } finally {
      setLoading(false);
    }
  };

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
            Share Your Creativity
          </p>

          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Add a New Craft
          </h1>

          <p className="mt-3 text-base-content/60">
            Add your handmade jute or wooden creation to our craft
            collection.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleAddCraft}
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

            {/* Subcategory */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Craft Subcategory
              </label>

              <select
                name="subcategory_Name"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="select select-bordered w-full bg-base-100"
                required
              >
                <option value="" disabled>
                  Select a subcategory
                </option>

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

              {/* Item examples */}
              {selectedCategory && (
                <div
                  className="
                    mt-3
                    p-3
                    rounded-xl
                    bg-amber-50
                    dark:bg-amber-500/10
                    border
                    border-amber-200
                    dark:border-amber-500/20
                  "
                >
                  <p
                    className="
                      text-xs
                      leading-5
                      text-amber-800
                      dark:text-amber-300
                    "
                  >
                    💡 {itemExamples[selectedCategory]}
                  </p>
                </div>
              )}
            </div>

            {/* Item Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Item Name
              </label>

              <input
                type="text"
                name="item_name"
                placeholder={
                  selectedCategory
                    ? "Enter a craft name..."
                    : "Select a category first..."
                }
                className="input input-bordered w-full bg-base-100"
                required
              />

              <p className="text-xs text-base-content/50 mt-2">
                Give your handmade item a clear and descriptive name.
              </p>
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Craft Image URL
              </label>

              <input
                type="url"
                name="image"
                placeholder="https://example.com/my-craft-image.jpg"
                className="input input-bordered w-full bg-base-100"
                required
              />

              <p className="text-xs text-base-content/50 mt-2">
                Paste a direct image link for the craft you are adding.
              </p>
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
                placeholder="29.99"
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
                placeholder="4.8"
                className="input input-bordered w-full bg-base-100"
                required
              />

              <p className="text-xs text-base-content/50 mt-2">
                Rating must be between 0 and 5.
              </p>
            </div>

            {/* Customization */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Customization Available?
              </label>

              <select
                name="customization"
                defaultValue=""
                className="select select-bordered w-full bg-base-100"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>

                <option value="Yes">Yes</option>
                <option value="No">No</option>
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
                placeholder="Example: 3-5 days"
                className="input input-bordered w-full bg-base-100"
                required
              />
            </div>

            {/* Stock Status */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Stock Status
              </label>

              <select
                name="stockStatus"
                defaultValue=""
                className="select select-bordered w-full bg-base-100"
                required
              >
                <option value="" disabled>
                  Select stock status
                </option>

                <option value="In Stock">
                  In Stock
                </option>

                <option value="Made to Order">
                  Made to Order
                </option>
              </select>
            </div>

            {/* User Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Added By
              </label>

              <input
                type="text"
                value={user?.displayName || "User"}
                readOnly
                className="
                  input
                  input-bordered
                  w-full
                  bg-base-200
                  cursor-not-allowed
                "
              />
            </div>

            {/* User Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                User Email
              </label>

              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="
                  input
                  input-bordered
                  w-full
                  bg-base-200
                  cursor-not-allowed
                "
              />

              <p className="text-xs text-base-content/50 mt-2">
                This craft will automatically be connected to your account.
              </p>
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
              placeholder="Tell visitors about the materials, design, craftsmanship, or special features of this item..."
              className="textarea textarea-bordered w-full bg-base-100"
              required
            />
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="
                btn
                w-full
                border-none
                bg-amber-600
                hover:bg-amber-700
                text-white
                text-base
              "
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Adding Craft...
                </>
              ) : (
                <>＋ Add Craft Item</>
              )}
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default AddCraft;