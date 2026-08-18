import CategoryCard from "./CategoryCard";

import juteHome from "../assets/Image/Categories/jute-home-decor.jpg";
import woodenHome from "../assets/Image/Categories/wooden-home-decor.jpg";
import woodenKitchen from "../assets/Image/Categories/wooden-kitchenware.jpg";
import juteKitchen from "../assets/Image/Categories/jute-kitchenware.jpg";
import woodenFurniture from "../assets/Image/Categories/wooden-furniture.jpg";
import jewellery from "../assets/Image/Categories/jewelarry.jpg";

const CraftCategories = () => {

  const categories = [
    {
      name: "Jute Home Decor",
      image: juteHome,
      description: "Natural handcrafted decor for your home.",
    },
    {
      name: "Wooden Home Decor",
      image: woodenHome,
      description: "Rustic wooden pieces with timeless beauty.",
    },
    {
      name: "Wooden Utensils and Kitchenware",
      image: woodenKitchen,
      description: "Handcrafted wooden essentials for your kitchen.",
    },
    {
      name: "Jute Kitchenware & Utensils",
      image: juteKitchen,
      description: "Eco-friendly jute creations for everyday living.",
    },
    {
      name: "Wooden Furniture & Sculptures",
      image: woodenFurniture,
      description: "Beautiful handmade furniture and wooden art.",
    },
    {
      name: "Jute and Wooden Jewellery",
      image: jewellery,
      description: "Unique jewellery inspired by natural materials.",
    },
  ];

  return (
    <section className="bg-amber-50/50 dark:bg-slate-900/50 py-16">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

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
              mb-2
            "
          >
            Explore By Category
          </p>

          <h2
            className="
              text-3xl md:text-4xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Craft Categories
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Explore our collection of handcrafted jute and wooden
            products across six unique categories.
          </p>

        </div>

        {/* Categories */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CraftCategories;