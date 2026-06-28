import { motion } from "motion/react";

const stats = [
  { value: "150+", label: "Digital Experiences" },
  { value: "25+", label: "Awwwards & FWA" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Disrupting" },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/animate_this_for_website.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55 z-0"></div>

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent z-0"></div>

      <div className="absolute -bottom-32 -right-32 w-162 h-162 rounded-full bg-red-600/20 blur-[150px] z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-28 lg:pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Side */}
          <div className="lg:col-span-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1
                variants={itemVariants}
                className="
                  flex flex-col
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-tight
                  text-[48px]
                  sm:text-[64px]
                  md:text-[82px]
                  lg:text-[100px]
                  xl:text-[120px]
                  2xl:text-[140px]
                "
              >
                <span>
                  Design
                  <span className="text-red-500">.</span>
                </span>

                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "2px rgba(255,255,255,.9)",
                  }}
                >
                  Disrupt
                  <span className="text-red-500">.</span>
                </span>

                <span>
                  Conquer
                  <span className="text-red-500">.</span>
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="
                  max-w-xl
                  text-base
                  sm:text-lg
                  text-gray-300
                  leading-relaxed
                "
              >
                We build cinematic digital experiences for visionary brands.
                Every pixel is crafted with precision, performance and premium
                aesthetics. Creating bold digital products that inspire,
                convert and leave unforgettable impressions.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-8
                    py-4
                    rounded-full
                    bg-red-600
                    hover:bg-red-500
                    transition-all
                    duration-300
                    text-white
                    font-semibold
                    shadow-xl
                  "
                  onClick={() =>
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white/30
                    bg-white/5
                    backdrop-blur-md
                    hover:border-red-500
                    transition-all
                    duration-300
                    text-white
                    font-semibold
                  "
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8">

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="
                flex
                items-center
                gap-5
                border-l
                border-white/20
                pl-5
              "
            >
              <div>
                <p className="uppercase tracking-[0.3em] text-[10px] text-white/40">
                  Awwwards
                </p>

                <h3 className="text-xl font-bold text-white">
                  Agency of the Year
                </h3>
              </div>

              <div
                className="
                  w-16 h-16
                  md:w-20 md:h-20
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                "
              >
                <div className="w-6 h-6 rotate-45 border-2 border-red-500"></div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-5 group"
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div
                className="
                  w-16 h-16
                  md:w-20 md:h-20
                  lg:w-24 lg:h-24
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:border-red-500
                "
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>

              <span className="uppercase tracking-[0.3em] text-xs text-white">
                View Case Studies
              </span>
            </motion.button>

          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            mt-20
            pt-10
            border-t
            border-white/10
          "
        >
          {stats.map((item, index) => (
            <div key={index}>
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                  text-white
                "
              >
                {item.value}
              </h2>

              <p className="uppercase tracking-[0.3em] text-xs text-white/50 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">

        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="
            w-6
            h-10
            rounded-full
            border
            border-white/40
            flex
            justify-center
            pt-2
          "
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-red-500"
          />
        </motion.div>

      </div>
    </section>
  );
}