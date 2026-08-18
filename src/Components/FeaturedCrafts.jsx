import { useEffect, useState } from "react";
import CraftCard from "./CraftCard";

const FeaturedCrafts = () => {
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jute-wooden-craft-server-rw94.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Featured craft error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="featured-crafts"
      className="max-w-7xl mx-auto px-4 md:px-6 py-16"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-amber-600 uppercase tracking-[0.2em] text-sm font-semibold mb-2">
          Our Collection
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Featured Craft Items
        </h2>

        <p className="mt-3 text-base-content/60">
          Discover beautiful handmade jute and wooden creations added by
          our craft community.
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg text-amber-600"></span>
        </div>
      ) : crafts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-base-content/60">
            No craft items are available yet.
          </p>
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
          {crafts.map((craft) => (
            <CraftCard
              key={craft._id}
              craft={craft}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedCrafts;