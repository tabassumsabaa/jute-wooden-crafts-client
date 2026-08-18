
const WhyHandmade = () => {
  const features = [
    {
      icon: "🌿",
      number: "01",
      title: "Sustainable Materials",
      description:
        "Jute and wood are natural materials that bring warmth, durability, and an eco-conscious touch to everyday living.",
    },
    {
      icon: "👐",
      number: "02",
      title: "Authentic Craftsmanship",
      description:
        "Each piece reflects the skill, patience, and creativity of handmade work rather than mass production.",
    },
    {
      icon: "✨",
      number: "03",
      title: "Unique & Personal",
      description:
        "Small variations in texture, shape, and finish make every handmade creation beautifully one of a kind.",
    },
    {
      icon: "🤎",
      number: "04",
      title: "Supporting Artisans",
      description:
        "Choosing handmade products celebrates traditional skills and helps preserve the value of creative craftsmanship.",
    },
  ];

  return (
    <section
      className="
        relative
        py-20
        overflow-hidden
        bg-gradient-to-b
        from-[#fffaf3]
        to-[#fff3df]

        dark:from-[#111827]
        dark:via-[#162033]
        dark:to-[#1b2435]
      "
    >
      {/* Decorative background */}
      <div
        className="
          absolute
          -top-32 -right-32
          w-80 h-80
          rounded-full
          bg-amber-300/40
          dark:bg-amber-500/10
          blur-3xl
        "
      ></div>

      <div
        className="
          absolute
          -bottom-32 -left-32
          w-80 h-80
          rounded-full
          bg-orange-300/35
          dark:bg-orange-500/10
          blur-3xl
        "
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-2
              rounded-full
              bg-amber-100
              dark:bg-amber-500/10
              border
              border-amber-200
              dark:border-amber-500/20
              mb-5
            "
          >
            <span>🌿</span>

            <span
              className="
                text-xs md:text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-amber-700
                dark:text-amber-400
              "
            >
              The Beauty of Handmade
            </span>
          </div>

          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
              dark:text-white
              leading-tight
            "
          >
            More Than a Product,
            <span className="text-amber-600 dark:text-amber-400">
              {" "}A Story in Every Craft
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-gray-600
              dark:text-gray-300
              leading-relaxed
            "
          >
            Handmade jute and wooden crafts combine natural materials,
            traditional skills, and thoughtful design to create pieces
            with character and meaning.
          </p>

        </div>


        {/* Feature Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >
          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                group
                relative
                p-6
                rounded-2xl

                bg-white/95
                dark:bg-[#202b3d]

                border
                border-amber-100
                dark:border-amber-500/15

                shadow-sm
                dark:shadow-lg
                dark:shadow-black/10


                hover:shadow-xl
                hover:-translate-y-2

                dark:hover:border-amber-400/40
                dark:hover:bg-[#26354a]

                transition-all
                duration-300
              "
            >

              {/* Number */}
              <span
                className="
                  absolute
                  top-5 right-5
                  text-4xl
                  font-bold
                  text-amber-300
                  dark:text-slate-500/30
                  group-hover:text-amber-300
                  dark:group-hover:text-amber-400/50
                  transition-colors
                "
              >
                {feature.number}
              </span>


              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  flex
                  items-center
                  justify-center

                  rounded-2xl

                  bg-amber-100
                  dark:bg-amber-500/15

                  border
                  border-amber-200
                  dark:border-amber-400/25

                  text-3xl

                  mb-6

                  group-hover:scale-110
                  group-hover:rotate-3

                  transition-transform
                  duration-300
                "
              >
                {feature.icon}
              </div>


              {/* Title */}
              <h3
                className="
                  text-xl
                  font-bold
                  text-gray-900
                  dark:text-white
                  mb-3
                "
              >
                {feature.title}
              </h3>


              {/* Description */}
              <p
                className="
                  text-sm
                  leading-6
                  text-gray-600
                  dark:text-gray-300
                "
              >
                {feature.description}
              </p>


              {/* Bottom line */}
              <div
                className="
                  mt-6
                  h-[2px]
                  w-10
                  bg-amber-500
                  dark:bg-amber-400
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              ></div>

            </div>
          ))}
        </div>


        {/* Bottom Message */}
        <div
          className="
            mt-12
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5

            px-6 md:px-8
            py-6

            rounded-2xl

            bg-gradient-to-r
            from-amber-600
            to-orange-600

            dark:from-amber-700
            dark:to-orange-800

            text-white
            shadow-lg
          "
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Choose Craft. Choose Character.
            </h3>

            <p className="text-amber-50 mt-1 text-sm md:text-base">
              Discover pieces created with natural materials,
              creativity, and a human touch.
            </p>
          </div>

          <a
            href="#featured-crafts"
            className="
              shrink-0
              px-6 py-3
              rounded-full
              bg-white
              text-amber-700
              font-semibold
              hover:bg-amber-50
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Explore Crafts →
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyHandmade;