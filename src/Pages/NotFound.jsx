import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        bg-base-200
        text-base-content
      "
    >
      <div
        className="
          max-w-xl
          w-full
          text-center
          bg-base-100
          rounded-3xl
          border
          border-base-content/10
          shadow-xl
          p-8
          md:p-12
        "
      >
        <div className="text-7xl mb-5">
           🪵
        </div>

        <p
          className="
            text-amber-600
            uppercase
            tracking-[0.2em]
            text-sm
            font-semibold
          "
        >
          Error 404
        </p>

        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            mt-3
          "
        >
          Page Not Found
        </h1>

        <p
          className="
            mt-4
            text-base-content/60
            leading-relaxed
          "
        >
          The page you are looking for may have been moved,
          deleted, or does not exist.
        </p>

        <Link
          to="/"
          className="
            btn
            mt-8
            border-none
            bg-amber-600
            hover:bg-amber-700
            text-white
          "
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;