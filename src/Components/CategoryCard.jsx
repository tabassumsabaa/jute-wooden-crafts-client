import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, image, description } = category;

  return (
    <Link
      to={`/category/${encodeURIComponent(name)}`}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        h-[250px]
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="
          w-full h-full
          object-cover
          group-hover:scale-110
          transition-transform
          duration-500
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/30
          to-transparent
        "
      ></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-5 text-white">

        <h3 className="text-xl font-bold mb-1">
          {name}
        </h3>

        <p className="text-sm text-gray-200">
          {description}
        </p>

        <span
          className="
            inline-block
            mt-3
            text-amber-300
            text-sm
            font-semibold
            group-hover:translate-x-1
            transition-transform
          "
        >
          Explore Collection →
        </span>

      </div>
    </Link>
  );
};

export default CategoryCard;