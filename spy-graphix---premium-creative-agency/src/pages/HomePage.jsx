import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Award, Plus, Minus, Box } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { AICreativeStudio } from "../components/ui/AICreativeStudio";
import { InteractiveHero3D } from "../components/3d/InteractiveHero3D";
import { PortfolioMarquee } from "../components/ui/portfoliomarqee";
export function HomePage() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [openFaq, setOpenFaq] = useState("f1");
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    fetch("/api/services").then((res) => res.json()).then((data) => setServices(data.slice(0, 6))).catch(() => {
    });
    fetch("/api/portfolio").then((res) => res.json()).then((data) => setProjects(data)).catch(() => {
    });
    fetch("/api/testimonials").then((res) => res.json()).then((data) => setTestimonials(data)).catch(() => {
    });
    fetch("/api/faqs").then((res) => res.json()).then((data) => setFaqs(data)).catch(() => {
    });
    fetch("/api/blogs").then((res) => res.json()).then((data) => setBlogs(data.slice(0, 3))).catch(() => {
    });
  }, []);
  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
  return <div className="space-y-24 pt-24 md:pt-32">

    {
      /* --- HERO SECTION --- */
    }
    {/* =========================================================
    HERO SECTION
========================================================= */}

    <section className="relative min-h-screen bg-[#FFFFFF] text-[#000000] overflow-hidden">

      {/* =====================================================
        NAVIGATION
    ====================================================== */}

      <header className="relative z-50 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 py-6">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="
                    font-syne
                    font-extrabold
                    text-xl
                    md:text-2xl
                    tracking-[-0.06em]
                "
          >
            SPY<span className="text-[#6D001A]">GRAPHICX</span>
          </Link>


          {/* DESKTOP NAV */}
          <nav
            className="
                    hidden
                    md:flex
                    items-center
                    gap-8
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                "
          >

            <Link
              to="/portfolio"
              className="hover:text-[#6D001A] transition-colors"
            >
              Work
            </Link>

            <Link
              to="/services"
              className="hover:text-[#6D001A] transition-colors"
            >
              Services
            </Link>

            <Link
              to="/about"
              className="hover:text-[#6D001A] transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#6D001A] transition-colors"
            >
              Contact
            </Link>

          </nav>


          {/* MOBILE MENU */}
          <button
            className="
                    md:hidden
                    w-10
                    h-10
                    rounded-full
                    border
                    border-black/10
                    flex
                    items-center
                    justify-center
                "
          >
            <span className="text-sm">
              ☰
            </span>
          </button>

        </div>

      </header>


      {/* =====================================================
        HERO CONTENT
    ====================================================== */}

      <div
        className="
            relative
            max-w-[1600px]
            mx-auto

            px-6
            md:px-10
            lg:px-14

            pb-10
        "
      >

        <div
          className="
                grid
                grid-cols-1
                lg:grid-cols-12

                gap-10
                lg:gap-14

                items-center
            "
        >


          {/* =================================================
                LEFT — TYPOGRAPHY
            ================================================== */}

          <div
            className="
                    lg:col-span-7

                    flex
                    flex-col
                    justify-center

                    py-10
                    lg:py-16
                "
          >

            {/* Eyebrow */}

            <div
              className="
                        flex
                        items-center
                        gap-3
                        mb-8
                    "
            >

              <span
                className="
                            w-10
                            h-[2px]
                            bg-[#6D001A]
                        "
              />

              <span
                className="
                            text-[9px]
                            md:text-[10px]

                            font-bold
                            uppercase

                            tracking-[0.25em]

                            text-[#777777]
                        "
              >
                Independent Creative Studio
              </span>

            </div>


            {/* MAIN HEADLINE */}

            <h1
              className="
                        font-syne
                        font-extrabold
                        uppercase

                        tracking-[-0.075em]
                        leading-[0.78]

                        text-[#000000]
                    "
            >

              <span
                className="
                            block

                            text-[16vw]
                            sm:text-[100px]
                            md:text-[120px]
                            lg:text-[105px]
                            xl:text-[140px]
                        "
              >
                WE
              </span>


              <span
                className="
                            block

                            text-[16vw]
                            sm:text-[100px]
                            md:text-[120px]
                            lg:text-[105px]
                            xl:text-[140px]
                        "
              >
                MAKE
              </span>


              <span
                className="
                            block

                            text-[16vw]
                            sm:text-[100px]
                            md:text-[120px]
                            lg:text-[105px]
                            xl:text-[140px]
                        "
              >
                BRANDS
              </span>


              <span
                className="
                            block

                            font-serif
                            italic
                            font-normal

                            text-[#6D001A]

                            text-[17vw]
                            sm:text-[105px]
                            md:text-[125px]
                            lg:text-[110px]
                            xl:text-[145px]

                            tracking-[-0.05em]
                        "
              >
                move.
              </span>

            </h1>


            {/* DESCRIPTION */}

            <p
              className="
                        mt-8

                        max-w-xl

                        text-sm
                        sm:text-base
                        md:text-lg

                        text-[#777777]

                        leading-[1.7]

                        font-light
                    "
            >
              We build bold identities, digital experiences and
              visual systems for brands that refuse to blend in.
            </p>


            {/* CTA */}

            <div
              className="
                        mt-8

                        flex
                        flex-wrap
                        items-center

                        gap-3
                    "
            >

              <Link
                to="/contact"
                className="
                            group

                            bg-[#000000]
                            hover:bg-[#6D001A]

                            text-white

                            px-7
                            sm:px-8

                            py-4

                            rounded-full

                            text-[10px]
                            sm:text-xs

                            font-bold
                            uppercase

                            tracking-[0.16em]

                            transition-all
                            duration-300

                            flex
                            items-center
                            gap-3
                        "
              >

                <span>
                  Start A Project
                </span>

                <ArrowUpRight
                  className="
                                w-4
                                h-4

                                transition-transform
                                duration-300

                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                            "
                />

              </Link>


              <Link
                to="/portfolio"
                className="
                            group

                            px-6
                            sm:px-7

                            py-4

                            rounded-full

                            border
                            border-black/10

                            hover:border-[#6D001A]

                            text-[#000000]

                            hover:text-[#6D001A]

                            text-[10px]
                            sm:text-xs

                            font-bold
                            uppercase

                            tracking-[0.16em]

                            transition-all
                            duration-300

                            flex
                            items-center
                            gap-2
                        "
              >

                <span>
                  View Our Work
                </span>

                <span
                  className="
                                transition-transform
                                group-hover:translate-x-1
                            "
                >
                  →
                </span>

              </Link>

            </div>


            {/* SERVICE META */}

            <div
              className="
                        mt-10

                        flex
                        flex-wrap
                        items-center

                        gap-x-6
                        gap-y-3

                        text-[8px]
                        sm:text-[9px]

                        font-bold
                        uppercase

                        tracking-[0.18em]

                        text-[#999999]
                    "
            >

              <span>
                Branding
              </span>

              <span className="w-1 h-1 rounded-full bg-[#6D001A]" />

              <span>
                Digital
              </span>

              <span className="w-1 h-1 rounded-full bg-[#6D001A]" />

              <span>
                Motion
              </span>

              <span className="w-1 h-1 rounded-full bg-[#6D001A]" />

              <span>
                AI Creative
              </span>

            </div>

          </div>


          {/* =================================================
                RIGHT — ART DIRECTION PANEL
            ================================================== */}

          <div
            className="
                    lg:col-span-5

                    relative

                    h-[500px]
                    sm:h-[560px]
                    lg:h-[620px]
                "
          >

            {/* Burgundy background */}

            <div
              className="
                        absolute
                        inset-0

                        bg-[#6D001A]

                        overflow-hidden
                    "
            >

              {/* Decorative circle */}

              <div
                className="
                            absolute

                            -right-24
                            -top-24

                            w-64
                            h-64

                            rounded-full

                            border
                            border-white/10
                        "
              />


              {/* Vertical label */}

              <div
                className="
                            absolute

                            left-4
                            top-8

                            z-40

                            text-white/50

                            text-[8px]

                            uppercase

                            tracking-[0.3em]

                            [writing-mode:vertical-rl]
                        "
              >
                Selected Works / 2026
              </div>


              {/* Project number */}

              <div
                className="
                            absolute

                            right-5
                            top-6

                            z-40

                            text-white

                            text-[9px]

                            font-bold

                            tracking-[0.2em]
                        "
              >
                01 / 06
              </div>


              {/* =================================================
                        PORTFOLIO MARQUEE
                    ================================================== */}

              <div className="relative h-[500px] sm:h-[560px] lg:h-[620px]">
                <div className="absolute inset-0 bg-[#6D001A] overflow-hidden">

                  <div className="absolute left-5 right-5 top-16 bottom-20">
                    <PortfolioMarquee projects={projects} />
                  </div>

                </div>
              </div>

              {/* =================================================
                        BOTTOM INFORMATION
                    ================================================== */}

              <div
                className="
                            absolute

                            left-5
                            right-5

                            bottom-5

                            z-40

                            flex
                            items-end
                            justify-between
                        "
              >

                <div>

                  <div
                    className="
                                    text-white/60

                                    text-[8px]

                                    uppercase

                                    tracking-[0.2em]

                                    mb-1
                                "
                  >
                    Creative Direction
                  </div>

                  <div
                    className="
                                    text-white

                                    font-syne

                                    text-lg

                                    font-bold
                                "
                  >
                    Selected Works
                  </div>

                </div>


                {/* Portfolio button */}

                <Link
                  to="/portfolio"
                  className="
                                group

                                w-11
                                h-11

                                rounded-full

                                border
                                border-white/40

                                flex
                                items-center
                                justify-center

                                text-white

                                hover:bg-white
                                hover:text-[#6D001A]

                                transition-all
                                duration-300
                            "
                >

                  <ArrowUpRight
                    className="
                                    w-4
                                    h-4

                                    transition-transform
                                    duration-300

                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                  />

                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM SERVICE STRIP
        ====================================================== */}

        <div
          className="
                mt-10

                border-t
                border-black/10
            "
        >

          <div
            className="
                    grid
                    grid-cols-2
                    md:grid-cols-4
                "
          >

            {[
              "Branding",
              "Digital",
              "Motion",
              "AI Creative",
            ].map((item, index) => (

              <div
                key={item}
                className={`
                            py-5
                            md:py-6

                            ${index !== 0
                    ? "border-l border-black/10 pl-5 md:pl-8"
                    : ""
                  }
                        `}
              >

                <div
                  className="
                                flex
                                items-center
                                gap-3
                            "
                >

                  <span
                    className="
                                    text-[9px]

                                    text-[#6D001A]

                                    font-bold
                                "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                                    text-[8px]
                                    md:text-[10px]

                                    font-bold

                                    uppercase

                                    tracking-[0.2em]
                                "
                  >
                    {item}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
    {
      /* --- TRUSTED LOGOS SLIDER --- */
    }
    <section className="w-full bg-[#FFFFFF] py-12 border-y border-black/6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#777777] text-center">
          TRUSTED BY
        </p>
      </div>
      <div className="animate-marquee flex items-center gap-20 text-2xl md:text-3xl font-serif italic font-bold text-[#CCCCCC]">
        <span className="hover:text-[#111111] transition-colors cursor-pointer">FORBES</span>
        <span className="hover:text-[#111111] transition-colors cursor-pointer">ADOBE</span>
        <span className="hover:text-[#111111] transition-colors cursor-pointer">TESLA</span>
        <span className="hover:text-[#111111] transition-colors cursor-pointer">VOGUE</span>
        <span className="hover:text-[#111111] transition-colors cursor-pointer">LEICA</span>
        <span className="hover:text-[#111111] transition-colors cursor-pointer">AETHERIA Mumbai</span>
        <span className="hover:text-[#111111] transition-colors cursor-pointer">LUMINA TECH</span>
        <span className="hover:text-[#111111] transition-colors cursor-pointer">BANG & OLUFSEN</span>
      </div>
    </section>

    {
      /* --- SERVICES PREVIEW SECTION --- */
    }
    <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] font-light">
            Crafting distinct brand identities <br />
            <span className="italic font-serif">and immersive 3D digital experiences.</span>
          </h2>
        </div>
        <Link
          to="/services"
          className="text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#FF3B30] transition-colors flex items-center gap-1"
        >
          Explore All 14 Services →
        </Link>
      </div>

      {
        /* Services Grid */
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => <div
          key={service.id}
          className="group bg-[#FFFFFF] rounded-3xl p-8 border border-black/8 shadow-soft hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F6F6F6] group-hover:bg-[#FF3B30] group-hover:text-white transition-colors flex items-center justify-center text-[#111111]">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-syne text-[#111111]">
              {service.title}
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {
            /* Sub-services pills */
          }
          <div className="flex flex-wrap gap-1.5 pt-2">
            {service.subServices.slice(0, 3).map((sub, i) => <span key={i} className="text-[10px] bg-[#F6F6F6] text-[#555555] px-2.5 py-1 rounded-md font-medium">
              {sub}
            </span>)}
          </div>

          <div className="border-t border-black/6 pt-4 flex items-center justify-between">
            <span className="text-xs font-bold text-[#111111]">
              {service.pricing[0]?.price ? `From ${service.pricing[0].price}` : "Custom Scope"}
            </span>
            <Link
              to={`/services/${service.slug}`}
              className="w-8 h-8 rounded-full bg-[#F6F6F6] group-hover:bg-[#111111] group-hover:text-white transition-colors flex items-center justify-center text-[#111111]"
              data-cursor="VIEW"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>)}
      </div>
    </section>

    {
      /* --- FEATURED PORTFOLIO MASONRY --- */
    }
    <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30] flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> Selected Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] font-light">
            Featured Case Studies & <br />
            <span className="italic font-serif">Awwwards-winning campaigns.</span>
          </h2>
        </div>

        {
          /* Category Filter Pills */
        }
        <div className="flex flex-wrap gap-2">
          {["All", "Packaging Design", "Website & UI", "Branding & Identity", "AI Creative"].map((cat) => <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${activeCategory === cat ? "bg-[#111111] text-white shadow-md" : "bg-[#F6F6F6] text-[#777777] hover:bg-[#EAEAEA] hover:text-[#111111]"}`}
          >
            {cat}
          </button>)}
        </div>
      </div>

      {
        /* Projects Grid */
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group bg-[#FFFFFF] rounded-[28px] overflow-hidden border border-black/8 shadow-soft hover:shadow-2xl transition-all duration-500 space-y-6 p-4"
        >
          <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#F6F6F6]">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#111111]">
              {project.category}
            </div>
            <div className="absolute top-4 right-4 bg-black/80 text-white px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              {project.year}
            </div>
          </div>

          <div className="px-3 pb-2 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold font-syne text-[#111111] group-hover:text-[#FF3B30] transition-colors">
                {project.title}
              </h3>
              <Link
                to={`/portfolio/${project.slug}`}
                className="w-10 h-10 rounded-full bg-[#F6F6F6] group-hover:bg-[#FF3B30] group-hover:text-white transition-colors flex items-center justify-center text-[#111111]"
                data-cursor="CASE STUDY"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed line-clamp-2">
              {project.summary}
            </p>

            {
              /* Impact metrics chips */
            }
            <div className="flex items-center gap-4 pt-2 border-t border-black/6 text-xs text-[#111111] font-semibold">
              {project.impactMetrics.slice(0, 2).map((metric, i) => <div key={i} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                <span>{metric.label}: <strong>{metric.value}</strong></span>
              </div>)}
            </div>
          </div>
        </motion.div>)}
      </div>
    </section>

    {
      /* --- AI CREATIVE STUDIO INTERACTIVE DEMO --- */
    }
    <section className="max-w-7xl mx-auto px-6 md:px-12">
      <AICreativeStudio />
    </section>

    {
      /* --- AGENCY PROCESS SECTION --- */
    }
    <section className="bg-[#FFFFFF] py-20 border-y border-black/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">
            Our Creative Framework
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] font-light">
            From initial audit to <br />
            <span className="italic font-serif">Awwwards-grade deployment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery & Audit", desc: "In-depth market research, positioning analysis, and audience mapping." },
            { step: "02", title: "3D & Concepting", desc: "Synthesizing glass physical assets, moodboards, and spatial interactions." },
            { step: "03", title: "Refinement Sprint", desc: "Polishing micro-interactions, responsive tokens, and print dielines." },
            { step: "04", title: "Production Launch", desc: "4K media exports, WebGL performance tuning, and factory delivery." }
          ].map((p, i) => <div key={i} className="bg-[#F6F6F6] p-8 rounded-3xl space-y-4 relative border border-black/5">
            <span className="font-syne text-4xl font-extrabold text-[#FF3B30]">
              {p.step}
            </span>
            <h3 className="text-xl font-bold font-syne text-[#111111]">
              {p.title}
            </h3>
            <p className="text-xs text-[#666666] leading-relaxed">
              {p.desc}
            </p>
          </div>)}
        </div>
      </div>
    </section>

    {
      /* --- TESTIMONIALS SECTION --- */
    }
    <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">
          Client Endorsements
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] font-light">
          Trusted by founders & <br />
          <span className="italic font-serif">global marketing directors.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test) => <div
          key={test.id}
          className="bg-[#FFFFFF] rounded-3xl p-8 border border-black/8 shadow-soft flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-[#FF3B30]">
              {[...Array(test.rating)].map((_, i) => <Sparkles key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-sm text-[#333333] leading-relaxed italic">
              "{test.quote}"
            </p>
          </div>

          <div className="flex items-center gap-3 border-t border-black/6 pt-4">
            <img
              src={test.avatar}
              alt={test.clientName}
              className="w-10 h-10 rounded-full object-cover border border-black/10"
            />
            <div>
              <h4 className="text-xs font-bold text-[#111111]">{test.clientName}</h4>
              <p className="text-[11px] text-[#777777]">{test.clientRole}, {test.company}</p>
            </div>
          </div>
        </div>)}
      </div>
    </section>

    {
      /* --- BLOG PREVIEW SECTION --- */
    }
    <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">
            Creative Journal
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#111111] font-light">
            Latest insights on 3D web, <br />
            <span className="italic font-serif">luxury branding & AI.</span>
          </h2>
        </div>
        <Link
          to="/blog"
          className="text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#FF3B30] transition-colors"
        >
          Read All Articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => <Link
          key={blog.id}
          to={`/blog/${blog.slug}`}
          className="group bg-[#FFFFFF] rounded-3xl overflow-hidden border border-black/8 shadow-soft hover:shadow-xl transition-all space-y-4 p-4 block"
        >
          <div className="aspect-16/10 rounded-2xl overflow-hidden bg-[#F6F6F6]">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-2 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#777777] font-semibold">
              <span>{blog.category}</span>
              <span>{blog.readTime}</span>
            </div>
            <h3 className="text-lg font-bold font-syne text-[#111111] group-hover:text-[#FF3B30] transition-colors line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-xs text-[#666666] line-clamp-2">
              {blog.excerpt}
            </p>
          </div>
        </Link>)}
      </div>
    </section>

    {
      /* --- FAQ SECTION --- */
    }
    <section className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
      <div className="text-center space-y-3">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30]">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#111111] font-light">
          Everything you need to know <br />
          <span className="italic font-serif">about working with SPY GRAPHIX.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;
          return <div
            key={faq.id}
            className="bg-[#FFFFFF] border border-black/8 rounded-2xl overflow-hidden transition-all shadow-soft"
          >
            <button
              onClick={() => setOpenFaq(isOpen ? null : faq.id)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 text-[#111111] font-bold font-syne text-lg hover:text-[#FF3B30] transition-colors"
            >
              <span>{faq.question}</span>
              {isOpen ? <Minus className="w-5 h-5 text-[#FF3B30] shrink-0" /> : <Plus className="w-5 h-5 text-[#777777] shrink-0" />}
            </button>
            {isOpen && <div className="px-6 pb-6 text-xs text-[#555555] leading-relaxed border-t border-black/5 pt-4">
              {faq.answer}
            </div>}
          </div>;
        })}
      </div>
    </section>

  </div>;
}
