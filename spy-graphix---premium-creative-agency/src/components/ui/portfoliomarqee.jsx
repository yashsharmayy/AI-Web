import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function PortfolioMarquee({ projects = [] }) {
    if (!projects.length) return null;

    const rowOne = [...projects, ...projects];
    const rowTwo = [
        ...projects.slice().reverse(),
        ...projects.slice().reverse(),
    ];

    return (
        <div className="relative w-full h-full overflow-hidden rounded-[30px] bg-[#eeeeec]">

            {/* =====================================================
                AMBIENT BACKGROUND
            ====================================================== */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* Purple glow */}
                <div
                    className="
                        absolute
                        -top-20
                        right-[-80px]
                        w-[280px]
                        h-[280px]
                        rounded-full
                        bg-[#a855f7]/25
                        blur-[70px]
                    "
                />

                {/* Blue glow */}
                <div
                    className="
                        absolute
                        top-[35%]
                        left-[-100px]
                        w-[250px]
                        h-[250px]
                        rounded-full
                        bg-[#22d3ee]/15
                        blur-[80px]
                    "
                />

                {/* Red glow */}
                <div
                    className="
                        absolute
                        bottom-[-100px]
                        right-[15%]
                        w-[250px]
                        h-[250px]
                        rounded-full
                        bg-[#ff3b30]/10
                        blur-[80px]
                    "
                />

            </div>


            {/* =====================================================
                DECORATIVE GRID
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.06]
                    pointer-events-none
                    z-[1]

                    bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
                    bg-[size:35px_35px]
                "
            />


            {/* =====================================================
                TOP INFORMATION
            ====================================================== */}

            <div
                className="
                    absolute
                    top-5
                    left-6
                    right-6
                    z-40

                    flex
                    items-center
                    justify-between

                    pointer-events-none
                "
            >

                {/* Left tiny label */}

                <div className="flex items-center gap-2">

                    <span
                        className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-[#6D001A]
                            animate-pulse
                        "
                    />

                    <span
                        className="
                            text-[7px]
                            uppercase
                            tracking-[0.25em]
                            font-bold
                            text-black/50
                        "
                    >
                        Creative Archive
                    </span>

                </div>


                {/* Right counter */}

                <span
                    className="
                        text-[7px]
                        uppercase
                        tracking-[0.2em]
                        font-bold
                        text-black/40
                    "
                >
                    2026 / Selected
                </span>

            </div>


            {/* =====================================================
                SIDE DECORATION
            ====================================================== */}

            <div
                className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    z-40

                    [writing-mode:vertical-rl]

                    text-[7px]
                    uppercase
                    tracking-[0.35em]
                    font-bold

                    text-black/30

                    pointer-events-none
                "
            >
                Digital / Identity / Motion
            </div>


            {/* =====================================================
                LEFT FADE
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-y-0
                    left-0
                    w-20
                    z-30
                    pointer-events-none

                    bg-gradient-to-r
                    from-[#eeeeec]
                    via-[#eeeeec]/70
                    to-transparent
                "
            />


            {/* =====================================================
                RIGHT FADE
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-y-0
                    right-0
                    w-20
                    z-30
                    pointer-events-none

                    bg-gradient-to-l
                    from-[#eeeeec]
                    via-[#eeeeec]/70
                    to-transparent
                "
            />


            {/* =====================================================
                TOP FADE
            ====================================================== */}

            <div
                className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-24
                    z-30
                    pointer-events-none

                    bg-gradient-to-b
                    from-[#eeeeec]
                    to-transparent
                "
            />


            {/* =====================================================
                BOTTOM FADE
            ====================================================== */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-24
                    z-30
                    pointer-events-none

                    bg-gradient-to-t
                    from-[#eeeeec]
                    to-transparent
                "
            />


            {/* =====================================================
                CARDS AREA
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    justify-center

                    gap-3

                    pt-5

                    -rotate-[2deg]
                    scale-[1.04]
                "
            >

                {/* =================================================
                    ROW 1
                ================================================== */}

                <div
                    className="
                        flex
                        w-max

                        animate-portfolio-left

                        hover:[animation-play-state:paused]
                    "
                >

                    {rowOne.map((project, index) => (

                        <Link
                            key={`row1-${project.id}-${index}`}
                            to={`/portfolio/${project.slug}`}
                            className="
                                group
                                relative
                                shrink-0
                                overflow-hidden

                                w-[230px]
                                h-[160px]

                                sm:w-[270px]
                                sm:h-[185px]

                                lg:w-[285px]
                                lg:h-[195px]

                                mx-2

                                rounded-[24px]

                                bg-white

                                border
                                border-white/80

                                shadow-[0_25px_60px_rgba(0,0,0,0.18)]

                                transition-all
                                duration-500

                                hover:-translate-y-3
                                hover:shadow-[0_35px_80px_rgba(0,0,0,0.25)]
                            "
                        >

                            {/* IMAGE */}

                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                loading="lazy"
                                className="
                                    absolute
                                    inset-0

                                    w-full
                                    h-full

                                    object-cover

                                    transition-transform
                                    duration-[1200ms]

                                    group-hover:scale-110
                                "
                            />


                            {/* COLOR / GLASS OVERLAY */}

                            <div
                                className="
                                    absolute
                                    inset-0

                                    bg-gradient-to-br
                                    from-white/10
                                    via-transparent
                                    to-black/50

                                    opacity-70
                                "
                            />


                            {/* Bottom dark gradient */}

                            <div
                                className="
                                    absolute
                                    inset-x-0
                                    bottom-0
                                    h-[65%]

                                    bg-gradient-to-t
                                    from-black/90
                                    via-black/30
                                    to-transparent
                                "
                            />


                            {/* =================================================
                                CATEGORY PILL
                            ================================================== */}

                            <div
                                className="
                                    absolute
                                    top-4
                                    left-4
                                    z-10
                                "
                            >

                                <span
                                    className="
                                        flex
                                        items-center
                                        gap-1.5

                                        bg-white/90
                                        backdrop-blur-xl

                                        border
                                        border-white

                                        rounded-full

                                        px-3
                                        py-1.5

                                        text-[7px]

                                        font-bold
                                        uppercase

                                        tracking-[0.12em]

                                        text-black
                                    "
                                >

                                    <span
                                        className="
                                            w-1.5
                                            h-1.5
                                            rounded-full
                                            bg-[#6D001A]
                                        "
                                    />

                                    {project.category}

                                </span>

                            </div>


                            {/* =================================================
                                FLOATING INDEX
                            ================================================== */}

                            <div
                                className="
                                    absolute
                                    top-4
                                    right-4
                                    z-10

                                    w-7
                                    h-7

                                    rounded-full

                                    bg-black/20
                                    backdrop-blur-md

                                    border
                                    border-white/20

                                    flex
                                    items-center
                                    justify-center

                                    text-white

                                    text-[7px]
                                    font-bold
                                "
                            >
                                {String((index % projects.length) + 1).padStart(2, "0")}
                            </div>


                            {/* =================================================
                                PROJECT INFO
                            ================================================== */}

                            <div
                                className="
                                    absolute
                                    left-4
                                    right-4
                                    bottom-4
                                    z-10

                                    flex
                                    items-end
                                    justify-between
                                "
                            >

                                <div className="min-w-0 pr-3">

                                    <p
                                        className="
                                            font-syne
                                            text-white

                                            text-base
                                            sm:text-lg

                                            font-bold

                                            tracking-tight

                                            truncate
                                        "
                                    >
                                        {project.title}
                                    </p>

                                    <p
                                        className="
                                            mt-1

                                            text-[7px]

                                            uppercase

                                            tracking-[0.2em]

                                            text-white/55
                                        "
                                    >
                                        {project.year} · Selected Work
                                    </p>

                                </div>


                                {/* Arrow */}

                                <div
                                    className="
                                        shrink-0

                                        w-9
                                        h-9

                                        rounded-full

                                        bg-white

                                        text-black

                                        flex
                                        items-center
                                        justify-center

                                        shadow-lg

                                        transition-all
                                        duration-300

                                        group-hover:bg-[#6D001A]
                                        group-hover:text-white

                                        group-hover:rotate-45
                                    "
                                >

                                    <ArrowUpRight className="w-4 h-4" />

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>


                {/* =================================================
                    ROW 2
                ================================================== */}

                <div
                    className="
                        flex
                        w-max

                        animate-portfolio-right

                        hover:[animation-play-state:paused]
                    "
                >

                    {rowTwo.map((project, index) => (

                        <Link
                            key={`row2-${project.id}-${index}`}
                            to={`/portfolio/${project.slug}`}
                            className="
                                group
                                relative
                                shrink-0
                                overflow-hidden

                                w-[185px]
                                h-[125px]

                                sm:w-[220px]
                                sm:h-[145px]

                                lg:w-[235px]
                                lg:h-[155px]

                                mx-2

                                rounded-[21px]

                                bg-white

                                border
                                border-white/80

                                shadow-[0_20px_45px_rgba(0,0,0,0.14)]

                                transition-all
                                duration-500

                                hover:-translate-y-2
                                hover:shadow-[0_30px_60px_rgba(0,0,0,0.22)]
                            "
                        >

                            {/* IMAGE */}

                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                loading="lazy"
                                className="
                                    absolute
                                    inset-0

                                    w-full
                                    h-full

                                    object-cover

                                    transition-transform
                                    duration-[1200ms]

                                    group-hover:scale-110
                                "
                            />


                            {/* Gradient */}

                            <div
                                className="
                                    absolute
                                    inset-0

                                    bg-gradient-to-t
                                    from-black/85
                                    via-black/10
                                    to-transparent
                                "
                            />


                            {/* CATEGORY */}

                            <div
                                className="
                                    absolute
                                    top-3
                                    left-3
                                    z-10
                                "
                            >

                                <span
                                    className="
                                        bg-white/90
                                        backdrop-blur-md

                                        rounded-full

                                        px-2.5
                                        py-1

                                        text-[6px]

                                        uppercase
                                        tracking-[0.12em]

                                        font-bold

                                        text-black
                                    "
                                >
                                    {project.category}
                                </span>

                            </div>


                            {/* INFO */}

                            <div
                                className="
                                    absolute

                                    left-3
                                    right-3
                                    bottom-3

                                    flex
                                    items-end
                                    justify-between

                                    z-10
                                "
                            >

                                <div className="min-w-0 pr-2">

                                    <p
                                        className="
                                            text-white

                                            font-syne
                                            font-bold

                                            text-xs

                                            truncate
                                        "
                                    >
                                        {project.title}
                                    </p>

                                    <p
                                        className="
                                            mt-0.5

                                            text-[6px]

                                            uppercase

                                            tracking-[0.15em]

                                            text-white/50
                                        "
                                    >
                                        Selected Work
                                    </p>

                                </div>


                                <div
                                    className="
                                        shrink-0

                                        w-7
                                        h-7

                                        rounded-full

                                        bg-white/20
                                        backdrop-blur-md

                                        border
                                        border-white/30

                                        flex
                                        items-center
                                        justify-center

                                        text-white

                                        transition-all
                                        duration-300

                                        group-hover:bg-[#6D001A]
                                        group-hover:rotate-45
                                    "
                                >
                                    <ArrowUpRight className="w-3 h-3" />
                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>


            {/* =====================================================
                CENTER GLASS BADGE
            ====================================================== */}

            <div
                className="
                    absolute
                    inset-0

                    z-40

                    pointer-events-none

                    flex
                    items-center
                    justify-center
                "
            >

                <div
                    className="
                        relative

                        flex
                        items-center
                        gap-3

                        px-6
                        py-3

                        rounded-full

                        bg-white/85
                        backdrop-blur-2xl

                        border
                        border-white

                        shadow-[0_15px_45px_rgba(0,0,0,0.16)]
                    "
                >

                    {/* Red dot */}

                    <span
                        className="
                            relative
                            flex
                            items-center
                            justify-center

                            w-2
                            h-2
                        "
                    >

                        <span
                            className="
                                absolute
                                w-4
                                h-4
                                rounded-full
                                bg-[#6D001A]/10
                                animate-ping
                            "
                        />

                        <span
                            className="
                                relative
                                w-2
                                h-2
                                rounded-full
                                bg-[#6D001A]
                            "
                        />

                    </span>


                    <span
                        className="
                            text-[8px]
                            sm:text-[9px]

                            uppercase

                            tracking-[0.25em]

                            font-bold

                            text-black
                        "
                    >
                        Selected Works
                    </span>


                    <Sparkles
                        className="
                            w-3
                            h-3
                            text-[#6D001A]
                        "
                    />

                </div>

            </div>


            {/* =====================================================
                FLOATING CORNER ELEMENT
            ====================================================== */}

            <div
                className="
                    absolute

                    right-5
                    bottom-5

                    z-40

                    w-10
                    h-10

                    rounded-full

                    bg-black/90

                    flex
                    items-center
                    justify-center

                    text-white

                    pointer-events-none
                "
            >

                <ArrowUpRight className="w-4 h-4" />

            </div>


            {/* =====================================================
                BOTTOM PROGRESS LINE
            ====================================================== */}

            <div
                className="
                    absolute
                    left-6
                    right-16
                    bottom-7

                    z-40

                    h-[1px]

                    bg-black/10
                "
            >

                <div
                    className="
                        h-full
                        w-[32%]

                        bg-[#6D001A]
                    "
                />

            </div>

        </div>
    );
}