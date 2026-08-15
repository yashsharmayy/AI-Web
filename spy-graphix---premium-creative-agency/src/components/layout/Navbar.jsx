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

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [servicesDropdownOpen, setServicesDropdownOpen] =
    useState(false);


  /* =========================================================
     ROUTER
  ========================================================= */

  const location =
    useLocation();


  /* =========================================================
     REFS
  ========================================================= */

  const servicesRef =
    useRef(null);


  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 20
      );

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
     CLOSE MOBILE MENU
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
        duration-300
        ${scrolled ? "pt-3" : "pt-5"}
      `}
    >

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div
        className={`
          max-w-[1400px]
          mx-auto
          flex
          items-center
          justify-between
          gap-3
          lg:gap-5
          transition-all
          duration-300
          ${scrolled
            ? "scale-[0.985]"
            : "scale-100"
          }
        `}
      >


        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          to="/"
          className="
            flex
            items-center
            gap-2.5
            bg-white/95
            backdrop-blur-xl
            rounded-full
            border
            border-black/10
            shadow-soft
            px-4
            py-2.5
            shrink-0
            hover:shadow-md
            transition-shadow
          "
        >

          <span
            className="
              w-8
              h-8
              rounded-full
              bg-[#FF3B30]
              text-white
              flex
              items-center
              justify-center
              font-bold
              text-sm
            "
          >
            S
          </span>


          <span
            className="
              text-sm
              font-extrabold
              tracking-tight
              text-[#111111]
              hidden
              sm:block
            "
          >
            SPYGRAPHIX
          </span>

        </Link>


        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-1
            bg-white/90
            backdrop-blur-xl
            px-2
            py-2
            rounded-full
            border
            border-black/10
            shadow-soft
          "
        >


          {/* =================================================
              SERVICES
          ================================================= */}

          <div
            ref={servicesRef}
            className="relative"
          >

            <button
              type="button"
              onClick={() =>
                setServicesDropdownOpen(
                  (previous) =>
                    !previous
                )
              }
              onMouseEnter={() =>
                setServicesDropdownOpen(true)
              }
              className={`
                px-4
                py-2.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                rounded-full
                transition-all
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                cursor-pointer
                ${location.pathname.startsWith(
                "/services"
              )
                  ? "bg-[#111111] text-white"
                  : "text-[#111111] hover:text-[#FF3B30]"
                }
              `}
            >

              Services

              <ChevronDown
                className={`
                  w-3.5
                  h-3.5
                  transition-transform
                  duration-200
                  ${servicesDropdownOpen
                    ? "rotate-180"
                    : ""
                  }
                `}
              />

            </button>


            {/* =================================================
                DESKTOP SERVICES DROPDOWN
            ================================================= */}

            <AnimatePresence>

              {servicesDropdownOpen && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                  onMouseEnter={() =>
                    setServicesDropdownOpen(true)
                  }
                  className="
                    absolute
                    top-[calc(100%+10px)]
                    left-1/2
                    -translate-x-1/2
                    w-[360px]
                    bg-white
                    rounded-2xl
                    border
                    border-black/10
                    shadow-2xl
                    overflow-hidden
                    z-[10000]
                  "
                >

                  {/* Dropdown Header */}

                  <div
                    className="
                      px-5
                      py-4
                      border-b
                      border-black/10
                      bg-[#FAFAFA]
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div>

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            font-bold
                            text-[#FF3B30]
                            mb-1
                          "
                        >
                          What we do
                        </p>

                        <p
                          className="
                            text-sm
                            font-bold
                            text-[#111111]
                          "
                        >
                          Creative Services
                        </p>

                      </div>


                      <Sparkles
                        className="
                          w-5
                          h-5
                          text-[#FF3B30]
                        "
                      />

                    </div>

                  </div>


                  {/* Services List */}

                  <div
                    className="
                      p-2
                      max-h-[420px]
                      overflow-y-auto
                    "
                  >

                    {desktopServices.map(
                      (service) => (

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
                            py-3
                            rounded-xl
                            hover:bg-[#F6F6F6]
                            transition-colors
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
                                w-1.5
                                h-1.5
                                rounded-full
                                bg-[#FF3B30]
                                opacity-40
                                group-hover:opacity-100
                                transition-opacity
                                shrink-0
                              "
                            />

                            <span
                              className="
                                text-sm
                                text-[#333333]
                                group-hover:text-[#FF3B30]
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
                              text-[#999999]
                              group-hover:text-[#FF3B30]
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


                  {/* View All */}

                  <div
                    className="
                      border-t
                      border-black/10
                      p-3
                    "
                  >

                    <Link
                      to="/services"
                      onClick={() =>
                        setServicesDropdownOpen(false)
                      }
                      className="
                        flex
                        items-center
                        justify-between
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        bg-[#111111]
                        text-white
                        text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        hover:bg-[#FF3B30]
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
          ================================================= */}

          <Link
            to="/portfolio"
            className={`
              px-4
              py-2.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.14em]
              rounded-full
              transition-all
              whitespace-nowrap
              ${location.pathname === "/portfolio"
                ? "bg-[#111111] text-white"
                : "text-[#111111] hover:text-[#FF3B30]"
              }
            `}
          >
            Work
          </Link>


          {/* =================================================
              CULTURE
          ================================================= */}

          <Link
            to="/about"
            className={`
              px-4
              py-2.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.14em]
              rounded-full
              transition-all
              whitespace-nowrap
              ${location.pathname === "/about"
                ? "bg-[#111111] text-white"
                : "text-[#111111] hover:text-[#FF3B30]"
              }
            `}
          >
            Culture
          </Link>


          {/* =================================================
              JOURNAL
          ================================================= */}

          <Link
            to="/blog"
            className={`
              px-4
              py-2.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.14em]
              rounded-full
              transition-all
              whitespace-nowrap
              ${location.pathname.startsWith(
              "/blog"
            )
                ? "bg-[#111111] text-white"
                : "text-[#111111] hover:text-[#FF3B30]"
              }
            `}
          >
            Journal
          </Link>


          {/* =================================================
              CONTACT
          ================================================= */}

          <Link
            to="/contact"
            className={`
              px-4
              py-2.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.14em]
              rounded-full
              transition-all
              whitespace-nowrap
              ${location.pathname === "/contact"
                ? "bg-[#111111] text-white"
                : "text-[#111111] hover:text-[#FF3B30]"
              }
            `}
          >
            Contact
          </Link>

        </nav>


        {/* ===================================================
            DESKTOP RIGHT ACTIONS
        =================================================== */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-2
            shrink-0
          "
        >

          {/* -------------------------------------------------
              LOGIN
          ------------------------------------------------- */}

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
              px-4
              py-2.5
              bg-white/90
              backdrop-blur-xl
              rounded-full
              border
              border-black/10
              text-[#111111]
              hover:bg-[#111111]
              hover:text-white
              transition-all
              shadow-soft
              flex
              items-center
              justify-center
              gap-2
              cursor-pointer
              max-w-[150px]
            "
            title={
              user
                ? `Profile (${user.name})`
                : "Client Login / Register"
            }
          >

            {user?.avatar ? (

              <img
                src={user.avatar}
                alt={
                  user.name || "User"
                }
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
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                truncate
              "
            >
              {user
                ? user.name
                : "Login"}
            </span>

          </button>


          {/* -------------------------------------------------
              START PROJECT
          ------------------------------------------------- */}

          <Link
            to="/contact"
            className="
              px-5
              py-2.5
              bg-[#111111]
              text-white
              text-[10px]
              uppercase
              tracking-[0.14em]
              rounded-full
              font-semibold
              hover:bg-[#FF3B30]
              transition-all
              shadow-md
              flex
              items-center
              gap-2
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
              "
            />

          </Link>

        </div>


        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() =>
            setMobileMenuOpen(
              (previous) =>
                !previous
            )
          }
          className="
            lg:hidden
            bg-white/95
            backdrop-blur-xl
            p-3.5
            rounded-full
            border
            border-black/10
            shadow-soft
            text-[#111111]
            hover:bg-[#111111]
            hover:text-white
            transition-all
            cursor-pointer
            shrink-0
          "
          aria-label="Toggle menu"
          aria-expanded={
            mobileMenuOpen
          }
        >

          {mobileMenuOpen ? (

            <X
              className="
                w-5
                h-5
              "
            />

          ) : (

            <Menu
              className="
                w-5
                h-5
              "
            />

          )}

        </button>

      </div>


      {/* =====================================================
          MOBILE DRAWER
          IMPORTANT: OUTSIDE DESKTOP NAV
      ===================================================== */}

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              lg:hidden
              fixed
              left-4
              right-4
              top-[76px]
              sm:top-[84px]
              bg-white
              rounded-3xl
              border
              border-black/10
              shadow-2xl
              z-[9998]
              overflow-hidden
            "
          >

            {/* =================================================
                SCROLLABLE CONTENT
            ================================================= */}

            <div
              className="
                max-h-[calc(100vh-120px)]
                overflow-y-auto
                p-5
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
                    p-3.5
                    rounded-xl
                    font-bold
                    text-base
                    text-[#111111]
                    hover:bg-[#F6F6F6]
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
                    p-3.5
                    rounded-xl
                    font-bold
                    text-base
                    text-[#111111]
                    hover:bg-[#F6F6F6]
                    transition-colors
                  "
                >
                  Services & Solutions
                </Link>


                {/* MOBILE SERVICES */}

                <div
                  className="
                    ml-3
                    border-l
                    border-black/10
                    pl-3
                    space-y-1
                  "
                >

                  {mobileServices.map(
                    (service) => (

                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        onClick={
                          closeMobileMenu
                        }
                        className="
                          flex
                          items-center
                          justify-between
                          p-2.5
                          rounded-lg
                          text-sm
                          text-[#555555]
                          hover:bg-[#F6F6F6]
                          hover:text-[#FF3B30]
                          transition-colors
                        "
                      >

                        <span>
                          {service.title}
                        </span>

                        <ArrowUpRight
                          className="
                            w-3
                            h-3
                          "
                        />

                      </Link>

                    )
                  )}


                  {/* VIEW ALL */}

                  <Link
                    to="/services"
                    onClick={
                      closeMobileMenu
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      p-3
                      mt-2
                      rounded-lg
                      text-sm
                      font-semibold
                      text-[#111111]
                      bg-[#F6F6F6]
                      hover:bg-[#111111]
                      hover:text-white
                      transition-colors
                    "
                  >

                    <span>
                      View All Services
                    </span>

                    <ArrowUpRight
                      className="
                        w-3.5
                        h-3.5
                      "
                    />

                  </Link>

                </div>


                {/* WORK */}

                <Link
                  to="/portfolio"
                  onClick={closeMobileMenu}
                  className="
                    p-3.5
                    rounded-xl
                    font-bold
                    text-base
                    text-[#111111]
                    hover:bg-[#F6F6F6]
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
                    p-3.5
                    rounded-xl
                    font-bold
                    text-base
                    text-[#111111]
                    hover:bg-[#F6F6F6]
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
                    p-3.5
                    rounded-xl
                    font-bold
                    text-base
                    text-[#111111]
                    hover:bg-[#F6F6F6]
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
                    p-3.5
                    rounded-xl
                    font-bold
                    text-base
                    text-[#111111]
                    hover:bg-[#F6F6F6]
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
                    p-3.5
                    text-left
                    rounded-xl
                    font-bold
                    text-base
                    text-[#FF3B30]
                    hover:bg-[#FF3B30]/10
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
                      w-5
                      h-5
                      fill-current
                    "
                  />

                </button>

              </nav>


              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <div
                className="
                  mt-4
                  pt-4
                  border-t
                  border-black/10
                "
              >

                <Link
                  to="/contact"
                  onClick={
                    closeMobileMenu
                  }
                  className="
                    w-full
                    bg-[#111111]
                    text-white
                    py-4
                    rounded-2xl
                    text-center
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-[#FF3B30]
                    transition-colors
                  "
                >

                  Book a Creative Call

                  <ArrowUpRight
                    className="
                      w-4
                      h-4
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