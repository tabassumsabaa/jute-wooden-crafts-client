import artisan1 from "../assets/Image/artisan/amina.jpeg";
import artisan2 from "../assets/Image/artisan/karim.jpeg";
import artisan3 from "../assets/Image/artisan/nusrat.jpeg";

const ArtisanSection = () => {
  const artisans = [
    {
      id: 1,
      name: "Amina Rahman",
      profession: "Jute Craft Artisan",
      experience: "8+ Years",
      location: "Dhaka, Bangladesh",
      image: artisan1,
      specialty: "Jute Home Decor",
      description:
        "Amina transforms natural jute into warm and functional home decor, combining traditional weaving techniques with modern designs.",
    },
    {
      id: 2,
      name: "Karim Hasan",
      profession: "Woodcraft Specialist",
      experience: "12+ Years",
      location: "Chattogram, Bangladesh",
      image: artisan2,
      specialty: "Wooden Furniture & Decor",
      description:
        "Karim specializes in handcrafted wooden furniture and decorative pieces, focusing on natural textures, durability, and detailed finishing.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      profession: "Jewellery Designer",
      experience: "6+ Years",
      location: "Rajshahi, Bangladesh",
      image: artisan3,
      specialty: "Jute & Wooden Jewellery",
      description:
        "Nusrat combines jute, wood, and creative patterns to design lightweight jewellery inspired by natural materials and traditional artistry.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-base-200 py-20 transition-colors duration-300">

      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute -top-32 -right-32
          w-96 h-96
          rounded-full
          bg-amber-500/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute -bottom-32 -left-32
          w-96 h-96
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* ================= HEADING ================= */}

        <div className="max-w-3xl mx-auto text-center mb-20">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5 py-2
              rounded-full

              bg-amber-500/10
              border
              border-amber-500/30

              text-amber-600
              mb-5
            "
          >
            <span>✦</span>

            <span
              className="
                text-xs md:text-sm
                font-bold
                uppercase
                tracking-[0.20em]
              "
            >
              The Hands Behind The Craft
            </span>
          </div>

          <h2
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-base-content
              leading-tight
            "
          >
           🏺 Meet Our{" "}
            <span className="text-amber-600">
              Artisans
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-base-content/65
              leading-7
            "
          >
            Skilled hands, natural materials, and years of craftsmanship
            come together to create meaningful pieces with their own
            character and story.
          </p>

        </div>

        {/* ================= ARTISAN CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-x-7
            gap-y-24
          "
        >
          {artisans.map((artisan) => (
            <article
              key={artisan.id}
              className="
                group
                relative

                bg-base-100

                border
                border-base-content/10

                rounded-[28px]

                px-6
                pt-24
                pb-6

                shadow-lg
                shadow-black/5

                hover:-translate-y-2
                hover:border-amber-500/40
                hover:shadow-2xl
                hover:shadow-amber-900/10

                transition-all
                duration-300
              "
            >

              {/* ================= CIRCULAR IMAGE ================= */}

              <div
                className="
                  absolute
                  -top-16
                  left-1/2
                  -translate-x-1/2
                "
              >
                {/* outer ring */}

                <div
                  className="
                    w-40 h-40
                    rounded-full
                    p-[4px]

                    bg-gradient-to-br
                    from-amber-400
                    via-amber-600
                    to-orange-500

                    shadow-xl
                    shadow-black/20
                  "
                >
                  {/* image */}

                  <div
                    className="
                      w-full h-full
                      rounded-full
                      overflow-hidden
                      border-4
                      border-base-100
                    "
                  >
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="
                        w-full
                        h-full
                        object-cover

                        group-hover:scale-110

                        transition-transform
                        duration-500
                      "
                    />
                  </div>
                </div>

                {/* Decorative badge */}

                <div
                  className="
                    absolute
                    -bottom-3
                    left-1/2
                    -translate-x-1/2

                    w-11 h-11
                    rounded-full

                    flex
                    items-center
                    justify-center

                    bg-amber-600
                    text-white

                    border-[3px]
                    border-base-100

                    shadow-md
                  "
                >
                  ✦
                </div>
              </div>

              {/* ================= NAME ================= */}

              <div className="text-center mt-4">

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-base-content
                  "
                >
                  {artisan.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    font-semibold
                    text-amber-600
                  "
                >
                  {artisan.profession}
                </p>

              </div>

              {/* Decorative divider */}

              <div className="flex items-center justify-center gap-3 my-5">

                <span className="w-10 h-px bg-amber-500/60" />

                <span className="text-amber-500 text-xs">
                  ◆
                </span>

                <span className="w-10 h-px bg-amber-500/60" />

              </div>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  text-center
                  text-sm
                  leading-6
                  text-base-content/65

                  min-h-[96px]
                "
              >
                {artisan.description}
              </p>

              {/* ================= DETAILS ================= */}

              <div
                className="
                  mt-2
                  pt-4

                  border-t
                  border-base-content/10

                  grid
                  grid-cols-3
                "
              >

                {/* Experience */}

                <div
                  className="
                    px-2
                    text-center

                    border-r
                    border-base-content/10
                  "
                >
                  <div
                    className="
                      mx-auto
                      mb-2

                      w-9 h-9
                      rounded-xl

                      flex
                      items-center
                      justify-center

                      bg-amber-500/10
                      text-amber-600
                    "
                  >
                    ◷
                  </div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-base-content/45
                    "
                  >
                    Experience
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      md:text-sm
                      font-bold
                      text-base-content
                    "
                  >
                    {artisan.experience}
                  </p>
                </div>

                {/* Specialty */}

                <div
                  className="
                    px-2
                    text-center

                    border-r
                    border-base-content/10
                  "
                >
                  <div
                    className="
                      mx-auto
                      mb-2

                      w-9 h-9
                      rounded-xl

                      flex
                      items-center
                      justify-center

                      bg-amber-500/10
                      text-amber-600
                    "
                  >
                    ◈
                  </div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-base-content/45
                    "
                  >
                    Specialty
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-bold
                      leading-5
                      text-base-content
                    "
                  >
                    {artisan.specialty}
                  </p>
                </div>

                {/* Location */}

                <div className="px-2 text-center">

                  <div
                    className="
                      mx-auto
                      mb-2

                      w-9 h-9
                      rounded-xl

                      flex
                      items-center
                      justify-center

                      bg-amber-500/10
                      text-amber-600
                    "
                  >
                    ●
                  </div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-wider
                      text-base-content/45
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-bold
                      leading-5
                      text-base-content
                    "
                  >
                    {artisan.location}
                  </p>

                </div>

              </div>

            </article>
          ))}
        </div>

        {/* ================= BOTTOM TEXT ================= */}

        <div className="text-center mt-16">

          <div
            className="
              inline-flex
              items-center
              gap-3

              px-6 py-3

              rounded-full

              bg-base-100
              border
              border-base-content/10

              shadow-sm
            "
          >
            <span className="text-amber-500">
              ✦
            </span>

            <p className="text-sm text-base-content/60">
              Every handmade piece carries the story of the artisan
              who created it.
            </p>

            <span className="text-amber-500">
              ✦
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ArtisanSection;