import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  User,
  Play,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "motion/react";

import { useAuth } from "../../context/AuthContext";
import { useLoader } from "../../context/LoaderContext";
import { INITIAL_SERVICES } from "../../data/initialData";


export function Navbar() {

  /* =========================================================
     CONTEXT
  ========================================================= */

  const {
    user,
    openAuthModal,
  } = useAuth();

  const {
    replayLoader,
  } = useLoader();


  /* =========================================================
     STATE
  ========================================================= */

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [servicesDropdownOpen, setServicesDropdownOpen] =
    useState(false);


  /* =========================================================
     ROUTER
  ========================================================= */

  const location = useLocation();


  /* =========================================================
     REFS
  ========================================================= */

  const servicesRef = useRef(null);


  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  /* =========================================================
     CLOSE MENUS ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {

    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

  }, [location.pathname]);


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {

        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);

      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, []);


  /* =========================================================
     CLICK OUTSIDE SERVICES
  ========================================================= */

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {

        setServicesDropdownOpen(false);

      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  /* =========================================================
     SERVICES
  ========================================================= */

  const desktopServices =
    INITIAL_SERVICES.slice(0, 6);

  const mobileServices =
    INITIAL_SERVICES.slice(0, 5);


  /* =========================================================
     ACTIVE LINK
  ========================================================= */

  const isActive = (path) => {
    return location.pathname === path;
  };


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <header
      className={`
                fixed
                top-0
                left-0
                right-0

                z-[9999]

                px-4
                sm:px-6
                lg:px-8

                transition-all
                duration-500

                ${scrolled
          ? "pt-3"
          : "pt-5"
        }
            `}
    >

      {/* =====================================================
                MAIN NAVBAR
            ====================================================== */}

      <div
        className={`
                    max-w-[1400px]
                    mx-auto

                    relative

                    flex
                    items-center
                    justify-between

                    gap-3
                    lg:gap-6

                    transition-all
                    duration-500

                    ${scrolled
            ? "scale-[0.985]"
            : "scale-100"
          }
                `}
      >

        {/* =================================================
                    LOGO
                ================================================== */}

        <Link
          to="/"
          className="
                        group
                        relative

                        flex
                        items-center
                        gap-2.5

                        px-3
                        py-2.5
                        sm:px-4

                        rounded-full

                        bg-[#F7F6F3]/90
                        backdrop-blur-2xl

                        border
                        border-black/[0.08]

                        shadow-[0_8px_30px_rgba(0,0,0,0.08)]

                        shrink-0

                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                    "
        >

          {/* Logo mark */}

          <span
            className="
                            relative

                            w-8
                            h-8

                            rounded-full

                            bg-[#6D001A]

                            text-white

                            flex
                            items-center
                            justify-center

                            font-bold
                            text-sm

                            shadow-[0_5px_15px_rgba(109,0,26,0.25)]

                            overflow-hidden
                        "
          >

            <span
              className="
                                absolute
                                inset-0

                                bg-white/10

                                translate-y-full

                                group-hover:translate-y-0

                                transition-transform
                                duration-300
                            "
            />

            <span className="relative z-10">
              S
            </span>

          </span>


          {/* Logo text */}

          <span
            className="
                            hidden
                            sm:block

                            text-sm
                            font-black

                            tracking-[-0.03em]

                            text-[#171717]
                        "
          >
            SPYGRAPHIX
          </span>

        </Link>


        {/* =================================================
                    DESKTOP NAVIGATION
                ================================================== */}

        <nav
          className="
                        hidden
                        lg:flex

                        items-center

                        gap-1

                        p-1.5

                        rounded-full

                        bg-[#F7F6F3]/85
                        backdrop-blur-2xl

                        border
                        border-black/[0.08]

                        shadow-[0_8px_30px_rgba(0,0,0,0.07)]
                    "
        >

          {/* =================================================
                        SERVICES
                    ================================================== */}

          <div
            ref={servicesRef}
            className="relative"
          >

            <button
              type="button"

              onClick={() =>
                setServicesDropdownOpen(
                  previous => !previous
                )
              }

              onMouseEnter={() =>
                setServicesDropdownOpen(true)
              }

              className={`
                                group

                                relative

                                flex
                                items-center
                                gap-1.5

                                px-4
                                py-2.5

                                rounded-full

                                text-[10px]

                                font-bold

                                uppercase

                                tracking-[0.15em]

                                transition-all
                                duration-300

                                whitespace-nowrap

                                cursor-pointer

                                ${location.pathname.startsWith("/services")
                  ? "bg-[#171717] text-white shadow-md"
                  : "text-[#222] hover:bg-black/[0.045] hover:text-[#6D001A]"
                }
                            `}
            >

              Services

              <ChevronDown
                className={`
                                    w-3.5
                                    h-3.5

                                    transition-transform
                                    duration-300

                                    ${servicesDropdownOpen
                    ? "rotate-180"
                    : ""
                  }
                                `}
              />

            </button>


            {/* =================================================
                            SERVICES DROPDOWN
                        ================================================== */}

            <AnimatePresence>

              {servicesDropdownOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.96,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}

                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.96,
                  }}

                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}

                  onMouseEnter={() =>
                    setServicesDropdownOpen(true)
                  }

                  className="
                                        absolute

                                        top-[calc(100%+12px)]

                                        left-1/2
                                        -translate-x-1/2

                                        w-[380px]

                                        overflow-hidden

                                        rounded-[24px]

                                        bg-[#F7F6F3]

                                        border
                                        border-black/[0.08]

                                        shadow-[0_30px_80px_rgba(0,0,0,0.16)]

                                        z-[10000]
                                    "
                >

                  {/* Dropdown header */}

                  <div
                    className="
                                            relative
                                            overflow-hidden

                                            px-5
                                            py-5

                                            bg-[#171717]

                                            text-white
                                        "
                  >

                    {/* Decorative circle */}

                    <div
                      className="
                                                absolute

                                                -right-8
                                                -top-12

                                                w-32
                                                h-32

                                                rounded-full

                                                bg-[#6D001A]/60

                                                blur-2xl
                                            "
                    />

                    <div
                      className="
                                                relative
                                                z-10

                                                flex
                                                items-center
                                                justify-between
                                            "
                    >

                      <div>

                        <p
                          className="
                                                        text-[9px]

                                                        uppercase

                                                        tracking-[0.25em]

                                                        font-bold

                                                        text-[#D98A9C]

                                                        mb-1.5
                                                    "
                        >
                          What we do
                        </p>

                        <p
                          className="
                                                        text-lg

                                                        font-bold

                                                        tracking-tight
                                                    "
                        >
                          Creative Services
                        </p>

                      </div>


                      <div
                        className="
                                                    w-10
                                                    h-10

                                                    rounded-full

                                                    bg-white/10
                                                    backdrop-blur-md

                                                    border
                                                    border-white/10

                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                      >

                        <Sparkles
                          className="
                                                        w-4
                                                        h-4

                                                        text-[#D98A9C]
                                                    "
                        />

                      </div>

                    </div>

                  </div>


                  {/* Services */}

                  <div
                    className="
                                            p-2.5

                                            max-h-[420px]

                                            overflow-y-auto
                                        "
                  >

                    {desktopServices.map(
                      service => (

                        <Link
                          key={service.id}

                          to={`/services/${service.slug}`}

                          onClick={() =>
                            setServicesDropdownOpen(false)
                          }

                          className="
                                                        group

                                                        flex
                                                        items-center
                                                        justify-between

                                                        gap-3

                                                        px-4
                                                        py-3.5

                                                        rounded-[15px]

                                                        hover:bg-white

                                                        transition-all
                                                        duration-200
                                                    "
                        >

                          <div
                            className="
                                                            flex
                                                            items-center
                                                            gap-3

                                                            min-w-0
                                                        "
                          >

                            <span
                              className="
                                                                relative

                                                                w-7
                                                                h-7

                                                                rounded-full

                                                                bg-[#6D001A]/[0.07]

                                                                flex
                                                                items-center
                                                                justify-center

                                                                shrink-0
                                                            "
                            >

                              <span
                                className="
                                                                    w-1.5
                                                                    h-1.5

                                                                    rounded-full

                                                                    bg-[#6D001A]

                                                                    transition-transform
                                                                    duration-200

                                                                    group-hover:scale-125
                                                                "
                              />

                            </span>


                            <span
                              className="
                                                                text-sm

                                                                font-medium

                                                                text-[#333]

                                                                group-hover:text-[#6D001A]

                                                                transition-colors

                                                                truncate
                                                            "
                            >
                              {service.title}
                            </span>

                          </div>


                          <ArrowUpRight
                            className="
                                                            w-3.5
                                                            h-3.5

                                                            text-black/25

                                                            group-hover:text-[#6D001A]

                                                            group-hover:translate-x-0.5
                                                            group-hover:-translate-y-0.5

                                                            transition-all

                                                            shrink-0
                                                        "
                          />

                        </Link>

                      )
                    )}

                  </div>


                  {/* View all */}

                  <div
                    className="
                                            p-3

                                            border-t
                                            border-black/[0.07]
                                        "
                  >

                    <Link
                      to="/services"

                      onClick={() =>
                        setServicesDropdownOpen(false)
                      }

                      className="
                                                group

                                                flex
                                                items-center
                                                justify-between

                                                w-full

                                                px-4
                                                py-3.5

                                                rounded-[15px]

                                                bg-[#171717]

                                                text-white

                                                text-[9px]

                                                font-bold

                                                uppercase

                                                tracking-[0.18em]

                                                hover:bg-[#6D001A]

                                                transition-colors
                                            "
                    >

                      <span>
                        View All Services
                      </span>

                      <ArrowUpRight
                        className="
                                                    w-4
                                                    h-4

                                                    transition-transform

                                                    group-hover:translate-x-1
                                                    group-hover:-translate-y-1
                                                "
                      />

                    </Link>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>


          {/* =================================================
                        WORK
                    ================================================== */}

          <Link
            to="/portfolio"

            className={`
                            px-4
                            py-2.5

                            rounded-full

                            text-[10px]

                            font-bold

                            uppercase

                            tracking-[0.15em]

                            transition-all
                            duration-300

                            whitespace-nowrap

                            ${isActive("/portfolio")
                ? "bg-[#171717] text-white shadow-md"
                : "text-[#222] hover:bg-black/[0.045] hover:text-[#6D001A]"
              }
                        `}
          >
            Work
          </Link>


          {/* =================================================
                        CULTURE
                    ================================================== */}

          <Link
            to="/about"

            className={`
                            px-4
                            py-2.5

                            rounded-full

                            text-[10px]

                            font-bold

                            uppercase

                            tracking-[0.15em]

                            transition-all
                            duration-300

                            whitespace-nowrap

                            ${isActive("/about")
                ? "bg-[#171717] text-white shadow-md"
                : "text-[#222] hover:bg-black/[0.045] hover:text-[#6D001A]"
              }
                        `}
          >
            Culture
          </Link>


          {/* =================================================
                        JOURNAL
                    ================================================== */}

          <Link
            to="/blog"

            className={`
                            px-4
                            py-2.5

                            rounded-full

                            text-[10px]

                            font-bold

                            uppercase

                            tracking-[0.15em]

                            transition-all
                            duration-300

                            whitespace-nowrap

                            ${location.pathname.startsWith("/blog")
                ? "bg-[#171717] text-white shadow-md"
                : "text-[#222] hover:bg-black/[0.045] hover:text-[#6D001A]"
              }
                        `}
          >
            Journal
          </Link>


          {/* =================================================
                        CONTACT
                    ================================================== */}

          <Link
            to="/contact"

            className={`
                            px-4
                            py-2.5

                            rounded-full

                            text-[10px]

                            font-bold

                            uppercase

                            tracking-[0.15em]

                            transition-all
                            duration-300

                            whitespace-nowrap

                            ${isActive("/contact")
                ? "bg-[#171717] text-white shadow-md"
                : "text-[#222] hover:bg-black/[0.045] hover:text-[#6D001A]"
              }
                        `}
          >
            Contact
          </Link>

        </nav>


        {/* =================================================
                    RIGHT ACTIONS
                ================================================== */}

        <div
          className="
                        hidden
                        lg:flex

                        items-center
                        gap-2

                        shrink-0
                    "
        >

          {/* Login */}

          <button
            type="button"

            onClick={() =>
              openAuthModal(
                user
                  ? "profile"
                  : "login"
              )
            }

            className="
                            group

                            flex
                            items-center
                            justify-center
                            gap-2

                            px-4
                            py-2.5

                            rounded-full

                            bg-[#F7F6F3]/90
                            backdrop-blur-xl

                            border
                            border-black/[0.08]

                            shadow-[0_8px_25px_rgba(0,0,0,0.06)]

                            text-[#171717]

                            hover:bg-[#171717]
                            hover:text-white

                            transition-all
                            duration-300

                            cursor-pointer

                            max-w-[150px]
                        "
          >

            {user?.avatar ? (

              <img
                src={user.avatar}
                alt={user.name || "User"}

                className="
                                    w-5
                                    h-5

                                    rounded-full

                                    object-cover

                                    shrink-0
                                "
              />

            ) : (

              <User
                className="
                                    w-4
                                    h-4

                                    shrink-0
                                "
              />

            )}


            <span
              className="
                                text-[9px]

                                font-bold

                                uppercase

                                tracking-[0.12em]

                                truncate
                            "
            >
              {user
                ? user.name
                : "Login"
              }
            </span>

          </button>


          {/* =================================================
                        START PROJECT
                    ================================================== */}

          <Link
            to="/contact"

            className="
                            group

                            flex
                            items-center
                            gap-2

                            px-5
                            py-2.5

                            rounded-full

                            bg-[#6D001A]

                            text-white

                            text-[9px]

                            font-bold

                            uppercase

                            tracking-[0.15em]

                            shadow-[0_8px_25px_rgba(109,0,26,0.25)]

                            hover:bg-[#171717]

                            hover:-translate-y-0.5

                            transition-all
                            duration-300

                            whitespace-nowrap
                        "
          >

            <span>
              Start a Project
            </span>

            <ArrowUpRight
              className="
                                w-3.5
                                h-3.5

                                transition-transform

                                group-hover:translate-x-0.5
                                group-hover:-translate-y-0.5
                            "
            />

          </Link>

        </div>


        {/* =================================================
                    MOBILE BUTTON
                ================================================== */}

        <button
          type="button"

          onClick={() =>
            setMobileMenuOpen(
              previous => !previous
            )
          }

          className="
                        lg:hidden

                        bg-[#F7F6F3]/95
                        backdrop-blur-xl

                        p-3.5

                        rounded-full

                        border
                        border-black/[0.08]

                        shadow-[0_8px_25px_rgba(0,0,0,0.08)]

                        text-[#171717]

                        hover:bg-[#171717]
                        hover:text-white

                        transition-all

                        cursor-pointer

                        shrink-0
                    "

          aria-label="Toggle menu"

          aria-expanded={mobileMenuOpen}
        >

          {mobileMenuOpen ? (

            <X className="w-5 h-5" />

          ) : (

            <Menu className="w-5 h-5" />

          )}

        </button>

      </div>


      {/* =====================================================
                MOBILE DRAWER
            ====================================================== */}

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}

            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}

            className="
                            lg:hidden

                            fixed

                            left-4
                            right-4

                            top-[76px]
                            sm:top-[84px]

                            bg-[#F7F6F3]

                            rounded-[28px]

                            border
                            border-black/[0.08]

                            shadow-[0_30px_80px_rgba(0,0,0,0.18)]

                            z-[9998]

                            overflow-hidden
                        "
          >

            {/* Mobile header */}

            <div
              className="
                                relative
                                overflow-hidden

                                px-5
                                py-5

                                bg-[#171717]

                                text-white
                            "
            >

              <div
                className="
                                    absolute

                                    -right-12
                                    -top-16

                                    w-40
                                    h-40

                                    rounded-full

                                    bg-[#6D001A]

                                    blur-3xl

                                    opacity-60
                                "
              />

              <div className="relative z-10">

                <p
                  className="
                                        text-[8px]

                                        uppercase

                                        tracking-[0.25em]

                                        text-[#D98A9C]

                                        font-bold
                                    "
                >
                  SPYGRAPHIX
                </p>

                <p
                  className="
                                        mt-1

                                        text-lg

                                        font-bold
                                    "
                >
                  Creative Studio
                </p>

              </div>

            </div>


            {/* Scrollable */}

            <div
              className="
                                max-h-[calc(100vh-145px)]

                                overflow-y-auto

                                p-4
                            "
            >

              <nav
                className="
                                    flex
                                    flex-col
                                    gap-1
                                "
              >

                {/* HOME */}

                <Link
                  to="/"
                  onClick={closeMobileMenu}

                  className="
                                        p-4

                                        rounded-[15px]

                                        font-bold

                                        text-sm

                                        text-[#171717]

                                        hover:bg-white
                                        hover:text-[#6D001A]

                                        transition-colors
                                    "
                >
                  Home
                </Link>


                {/* SERVICES */}

                <Link
                  to="/services"
                  onClick={closeMobileMenu}

                  className="
                                        p-4

                                        rounded-[15px]

                                        font-bold

                                        text-sm

                                        text-[#171717]

                                        hover:bg-white
                                        hover:text-[#6D001A]

                                        transition-colors
                                    "
                >
                  Services & Solutions
                </Link>


                {/* SERVICES CHILDREN */}

                <div
                  className="
                                        ml-4

                                        pl-3

                                        border-l
                                        border-[#6D001A]/15

                                        space-y-1
                                    "
                >

                  {mobileServices.map(
                    service => (

                      <Link
                        key={service.id}

                        to={`/services/${service.slug}`}

                        onClick={closeMobileMenu}

                        className="
                                                    flex
                                                    items-center
                                                    justify-between

                                                    p-3

                                                    rounded-xl

                                                    text-xs

                                                    text-black/55

                                                    hover:bg-white
                                                    hover:text-[#6D001A]

                                                    transition-colors
                                                "
                      >

                        <span>
                          {service.title}
                        </span>

                        <ArrowUpRight
                          className="w-3 h-3"
                        />

                      </Link>

                    )
                  )}


                  <Link
                    to="/services"

                    onClick={closeMobileMenu}

                    className="
                                            flex
                                            items-center
                                            justify-between

                                            p-3

                                            mt-1

                                            rounded-xl

                                            bg-[#171717]

                                            text-white

                                            text-xs

                                            font-bold

                                            hover:bg-[#6D001A]

                                            transition-colors
                                        "
                  >

                    <span>
                      View All Services
                    </span>

                    <ArrowUpRight
                      className="w-3.5 h-3.5"
                    />

                  </Link>

                </div>


                {/* WORK */}

                <Link
                  to="/portfolio"
                  onClick={closeMobileMenu}

                  className="
                                        p-4

                                        rounded-[15px]

                                        font-bold

                                        text-sm

                                        text-[#171717]

                                        hover:bg-white
                                        hover:text-[#6D001A]

                                        transition-colors
                                    "
                >
                  Portfolio / Case Studies
                </Link>


                {/* CULTURE */}

                <Link
                  to="/about"
                  onClick={closeMobileMenu}

                  className="
                                        p-4

                                        rounded-[15px]

                                        font-bold

                                        text-sm

                                        text-[#171717]

                                        hover:bg-white
                                        hover:text-[#6D001A]

                                        transition-colors
                                    "
                >
                  About Agency
                </Link>


                {/* JOURNAL */}

                <Link
                  to="/blog"
                  onClick={closeMobileMenu}

                  className="
                                        p-4

                                        rounded-[15px]

                                        font-bold

                                        text-sm

                                        text-[#171717]

                                        hover:bg-white
                                        hover:text-[#6D001A]

                                        transition-colors
                                    "
                >
                  Journal & Insights
                </Link>


                {/* CONTACT */}

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}

                  className="
                                        p-4

                                        rounded-[15px]

                                        font-bold

                                        text-sm

                                        text-[#171717]

                                        hover:bg-white
                                        hover:text-[#6D001A]

                                        transition-colors
                                    "
                >
                  Contact Studio
                </Link>


                {/* REPLAY */}

                <button
                  type="button"

                  onClick={() => {

                    closeMobileMenu();
                    replayLoader();

                  }}

                  className="
                                        p-4

                                        rounded-[15px]

                                        font-bold

                                        text-sm

                                        text-[#6D001A]

                                        hover:bg-[#6D001A]/[0.06]

                                        flex
                                        items-center
                                        justify-between

                                        transition-colors

                                        cursor-pointer
                                    "
                >

                  <span>
                    Replay Intro Animation
                  </span>

                  <Play
                    className="
                                            w-4
                                            h-4

                                            fill-current
                                        "
                  />

                </button>

              </nav>


              {/* =================================================
                                MOBILE CTA
                            ================================================== */}

              <div
                className="
                                    mt-3
                                    pt-4

                                    border-t
                                    border-black/[0.07]
                                "
              >

                <Link
                  to="/contact"

                  onClick={closeMobileMenu}

                  className="
                                        group

                                        w-full

                                        bg-[#6D001A]

                                        text-white

                                        py-4

                                        rounded-[18px]

                                        text-xs

                                        font-bold

                                        uppercase

                                        tracking-[0.15em]

                                        flex
                                        items-center
                                        justify-center
                                        gap-2

                                        hover:bg-[#171717]

                                        transition-colors
                                    "
                >

                  Book a Creative Call

                  <ArrowUpRight
                    className="
                                            w-4
                                            h-4

                                            transition-transform

                                            group-hover:translate-x-0.5
                                            group-hover:-translate-y-0.5
                                        "
                  />

                </Link>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );
}


export default Navbar;