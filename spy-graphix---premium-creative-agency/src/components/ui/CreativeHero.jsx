import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const ACCENT = "#6D001A";

export function CreativeHero({ projects = [] }) {
    if (!projects?.length) return null;

    // Only use a small number of images.
    // This is intentional for performance.
    const artwork = projects.slice(0, 7);

    return (
        <section className="relative min-h-180 overflow-hidden bg-[#171717] text-[#F7F6F3] sm:min-h-195 lg:min-h-212">

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="absolute inset-0 pointer-events-none">

                {/* Very subtle accent */}
                <div
                    className="absolute left-[35%] top-[25%] h-75 w-75 rounded-full opacity-20 blur-[100px]"
                    style={{ backgroundColor: ACCENT }}
                />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* =====================================================
                HEADER
            ====================================================== */}

            <div className="relative z-50 flex items-center justify-between px-5 py-6 sm:px-8 lg:px-12">

                {/* <div className="text-xs font-bold tracking-[0.28em]">
                    SPYGRAPHIX
                </div>

                <div className="hidden text-[9px] uppercase tracking-[0.3em] text-white/35 md:block">
                    Creative Visual Studio
                </div>

                <div className="text-xs text-white/40">
                    2026
                </div> */}

            </div>

            {/* =====================================================
                ARTWORK LAYER
            ====================================================== */}

            <div className="absolute inset-0 overflow-hidden">

                {artwork.map((project, index) => (
                    <FloatingArtwork
                        key={`${project.slug || project.id}-${index}`}
                        project={project}
                        index={index}
                    />
                ))}

            </div>

            {/* =====================================================
                DARK VIGNETTE
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    bg-[radial-gradient(circle_at_center,transparent_15%,rgba(23,23,23,.35)_70%,#171717_100%)]
                "
            />

            {/* =====================================================
                MAIN TYPOGRAPHY
            ====================================================== */}

            <div className="relative z-30 flex min-h-162
             items-center px-5 sm:px-8 lg:px-12">

                <div className="w-full">

                    {/* Small intro */}
                    <div className="mb-8 flex items-center gap-3">

                        <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: ACCENT }}
                        />

                        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/45">
                            Art direction · Digital · Motion
                        </span>

                    </div>

                    {/* MAKE */}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="
                            text-[clamp(80px,15vw,220px)]
                            font-black
                            leading-[0.72]
                            tracking-[-0.09em]
                        "
                    >
                        MAKE
                    </motion.h1>

                    {/* THEM */}

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="
                            ml-[8%]
                            text-[clamp(80px,15vw,220px)]
                            font-black
                            leading-[0.72]
                            tracking-[-0.09em]
                            text-transparent
                            [-webkit-text-stroke:2px_rgba(247,246,243,.85)]
                            sm:[-webkit-text-stroke:3px_rgba(247,246,243,.85)]
                        "
                    >
                        THEM
                    </motion.h1>

                    {/* LOOK */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16 }}
                        className="flex items-end"
                    >

                        <h1
                            className="
                                text-[clamp(80px,15vw,220px)]
                                font-black
                                leading-[0.72]
                                tracking-[-0.09em]
                            "
                        >
                            LOOK
                            <span style={{ color: ACCENT }}>.</span>
                        </h1>

                    </motion.div>

                </div>

            </div>

            {/* =====================================================
                BOTTOM INFO
            ====================================================== */}

            <div className="absolute bottom-0 left-0 right-0 z-50">

                <div className="flex flex-col gap-5 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">

                    <div className="max-w-[330px]">

                        <p className="text-xs leading-relaxed text-white/45">
                            We create identities, digital experiences and
                            visual worlds for ambitious brands.
                        </p>

                        <Link
                            to="/portfolio"
                            className="
                                mt-3
                                inline-flex
                                items-center
                                gap-2
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                            "
                        >
                            Explore work
                            <ArrowUpRight size={13} />
                        </Link>

                    </div>

                    <div className="hidden text-right md:block">

                        <div className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                            Selected disciplines
                        </div>

                        <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
                            Identity · Digital · 3D · Motion
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}


/* ================================================================
   FLOATING ARTWORK

   IMPORTANT:
   Animation is pure CSS.
   No Framer Motion loop.
================================================================ */

function FloatingArtwork({ project, index }) {

    const positions = [
        "left-[3%] top-[16%]",
        "right-[4%] top-[13%]",
        "right-[12%] top-[55%]",
        "left-[2%] bottom-[18%]",
        "left-[42%] top-[8%]",
        "right-[28%] bottom-[12%]",
        "left-[27%] bottom-[8%]",
    ];

    const sizes = [
        "w-[180px] h-[125px] sm:w-[230px] sm:h-[160px] lg:w-[290px] lg:h-[200px]",
        "w-[150px] h-[105px] sm:w-[210px] sm:h-[145px] lg:w-[270px] lg:h-[185px]",
        "w-[170px] h-[115px] sm:w-[220px] sm:h-[150px] lg:w-[280px] lg:h-[190px]",
        "w-[140px] h-[100px] sm:w-[200px] sm:h-[140px] lg:w-[250px] lg:h-[175px]",
        "w-[150px] h-[105px] sm:w-[210px] sm:h-[145px] lg:w-[260px] lg:h-[180px]",
        "w-[160px] h-[110px] sm:w-[215px] sm:h-[150px] lg:w-[275px] lg:h-[190px]",
        "w-[135px] h-[95px] sm:w-[190px] sm:h-[130px] lg:w-[240px] lg:h-[165px]",
    ];

    const rotations = [
        "-6deg",
        "5deg",
        "-4deg",
        "6deg",
        "-3deg",
        "4deg",
        "-5deg",
    ];

    const durations = [
        "11s",
        "14s",
        "12s",
        "15s",
        "13s",
        "16s",
        "12s",
    ];

    return (
        <Link
            to={`/portfolio/${project.slug}`}
            className={`
                absolute
                ${positions[index]}
                ${sizes[index]}
                group
                pointer-events-auto
                overflow-hidden
                rounded-[4px]
                border
                border-white/10
                shadow-2xl
            `}
            style={{
                transform: `rotate(${rotations[index]})`,
                animation: `spyFloat ${durations[index]} ease-in-out infinite`,
                animationDelay: `${index * -1.5}s`,
                willChange: "transform",
            }}
        >

            <img
                src={project.image || project.thumbnail || project.imageUrl}
                alt={project.title || "SPYGRAPHIX project"}
                loading="lazy"
                decoding="async"
                className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                "
            />

            {/* Minimal overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">

                <div>
                    <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
                        {project.title}
                    </div>

                    {project.category && (
                        <div className="mt-0.5 text-[7px] uppercase tracking-[0.18em] text-white/45">
                            {project.category}
                        </div>
                    )}
                </div>

                <ArrowUpRight
                    size={13}
                    className="text-white/70"
                />

            </div>

        </Link>
    );
}


/* ================================================================
   CSS ANIMATION
================================================================ */

const style = document.createElement("style");

style.innerHTML = `
    @keyframes spyFloat {
        0% {
            translate: 0 0;
        }

        25% {
            translate: 10px -8px;
        }

        50% {
            translate: -5px 10px;
        }

        75% {
            translate: 8px 5px;
        }

        100% {
            translate: 0 0;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
        }
    }
`;

if (typeof document !== "undefined") {
    document.head.appendChild(style);
}

export default CreativeHero;