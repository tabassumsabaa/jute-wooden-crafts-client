import { Link } from "react-router-dom";

const CraftCard = ({ craft }) => {
  const {
    _id,
    item_name,
    image,
    subcategory_Name,
    price,
    stockStatus,
    processing_time,
  } = craft;

  return (
    <div
      className="
        group
        bg-white dark:bg-slate-800
        rounded-2xl
        overflow-hidden
        border border-gray-100 dark:border-white/10
        shadow-md hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={item_name}
          className="
            w-full h-56
            object-cover
            group-hover:scale-105
            transition-transform duration-500
          "
        />

        {/* Stock */}
        <span
          className="
            absolute top-3 right-3
            bg-amber-600
            text-white
            text-xs
            px-3 py-1
            rounded-full
          "
        >
          {stockStatus}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p
          className="
            text-xs uppercase tracking-wider
            text-amber-600 dark:text-amber-400
            font-semibold
            mb-2
          "
        >
          {subcategory_Name}
        </p>

        <h3
          className="
            text-xl font-bold
            text-gray-900 dark:text-white
            mb-3
          "
        >
          {item_name}
        </h3>

        <div
          className="
            flex justify-between
            text-sm
            text-gray-500 dark:text-gray-400
            mb-5
          "
        >
          <span>⏱ {processing_time}</span>

          <span className="font-bold text-amber-600 dark:text-amber-400">
            €{price}
          </span>
        </div>

        <Link
          to={`/view/${_id}`}
          className="
            block w-full
            text-center
            py-2.5
            rounded-xl
            bg-amber-600
            hover:bg-amber-700
            text-white
            font-semibold
            transition-colors
          "
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CraftCard;