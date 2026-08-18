import banner1 from "../assets/Image/banner/HandCraftJute.png";
import banner2 from "../assets/Image/banner/woodenHomeCraft.png";
import banner3 from "../assets/Image/banner/HandCraft.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: "Handcrafted Jute Creations",
      description:
        "Discover sustainable and beautifully crafted jute products made for modern homes.",
    },
    {
      id: 2,
      image: banner2,
      title: "Timeless Wooden Crafts",
      description:
        "Explore unique wooden decor, furniture and handmade pieces crafted with care.",
    },
    {
      id: 3,
      image: banner3,
      title: "Crafted by Hands, Made with Heart",
      description:
        "Celebrate traditional craftsmanship through meaningful jute and wooden creations.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-3 md:px-6 mt-5 md:mt-7">
      <div className="carousel w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full"
          >
            {/* Banner Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="
                w-full
                h-[300px]
                sm:h-[360px]
                md:h-[450px]
                lg:h-[520px]
                object-cover
              "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Banner Content */}
            <div className="absolute inset-0 flex items-center">
              <div
                className="
                  max-w-3xl
                  px-14
                  sm:px-16
                  md:px-24
                  lg:px-28
                  text-white
                "
              >
                {/* Small Title */}
                <p
                  className="
                    text-[10px]
                    sm:text-xs
                    md:text-sm
                    uppercase
                    tracking-[0.18em]
                    md:tracking-[0.25em]
                    text-amber-300
                    font-semibold
                    mb-2 md:mb-4
                  "
                >
                   <Typewriter
    words={[
      "Jute & Wooden Crafts",
      "Handmade with Care",
      "Natural & Sustainable",
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={40}
    delaySpeed={1300}
  />
                </p>

                {/* Main Title */}
                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    font-bold
                    leading-tight
                    mb-3 md:mb-5
                  "
                >
                  {slide.title}
                </h2>

                {/* Description */}
                <p
                  className="
                    text-xs
                    sm:text-sm
                    md:text-base
                    lg:text-lg
                    text-gray-200
                    leading-relaxed
                    max-w-xl
                  "
                >
                  {slide.description}
                </p>

                {/* Explore Button */}
                <a
                  href="#featured-crafts"
                  className="
                    inline-flex
                    mt-5 md:mt-7
                    px-5 md:px-7
                    py-2.5 md:py-3
                    rounded-full
                    bg-amber-600
                    hover:bg-amber-700
                    text-white
                    text-xs md:text-sm
                    font-semibold
                    transition-all
                    duration-300
                    shadow-lg
                  "
                >
                  Explore Crafts
                </a>
              </div>
            </div>

            {/* Previous Arrow */}
            <a
              href={`#slide${
                index === 0 ? slides.length : index
              }`}
              className="
                absolute
                left-2 sm:left-3 md:left-6
                top-1/2
                -translate-y-1/2

                w-8 h-8
                sm:w-9 sm:h-9
                md:w-12 md:h-12

                flex
                items-center
                justify-center

                rounded-full
                bg-black/40
                hover:bg-amber-600

                text-white
                text-sm md:text-lg

                border
                border-white/30

                backdrop-blur-sm

                transition-all
                duration-300

                z-20
              "
              aria-label="Previous slide"
            >
              ❮
            </a>

            {/* Next Arrow */}
            <a
              href={`#slide${
                index === slides.length - 1
                  ? 1
                  : index + 2
              }`}
              className="
                absolute
                right-2 sm:right-3 md:right-6
                top-1/2
                -translate-y-1/2

                w-8 h-8
                sm:w-9 sm:h-9
                md:w-12 md:h-12

                flex
                items-center
                justify-center

                rounded-full
                bg-black/40
                hover:bg-amber-600

                text-white
                text-sm md:text-lg

                border
                border-white/30

                backdrop-blur-sm

                transition-all
                duration-300

                z-20
              "
              aria-label="Next slide"
            >
              ❯
            </a>

          </div>
        ))}

      </div>

      {/* Bottom Slide Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((slide) => (
          <a
            key={slide.id}
            href={`#slide${slide.id}`}
            className="
              w-2.5 h-2.5
              rounded-full
              bg-amber-500
              hover:scale-125
              transition-transform
              duration-300
            "
            aria-label={`Go to slide ${slide.id}`}
          ></a>
        ))}
      </div>
    </section>
  );
};

export default Banner;