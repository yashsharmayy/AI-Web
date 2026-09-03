import {
  useEffect,
  useRef,
  useState,
  Suspense,
  memo,
} from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

import {
  Volume2,
  VolumeX,
  FastForward,
  Sparkles,
} from "lucide-react";

import { useLoader } from "../../context/LoaderContext";

/* ============================================================
   LIGHTWEIGHT 3D OBJECTS
   ============================================================ */

/* ------------------------------------------------------------
   Glass Ring
   ------------------------------------------------------------ */

const GlassRing = memo(function GlassRing({
  position = [0, 0, 0],
  scale = 1,
}) {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.22;
    meshRef.current.rotation.y += delta * 0.35;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.45}
      floatIntensity={0.6}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
      >
        {/* Lower geometry than original */}
        <torusGeometry
          args={[1.4, 0.36, 12, 48]}
        />

        {/* CHEAP glass-like material
            No transmission/refraction */}
        <meshPhysicalMaterial
          color="#FFFFFF"
          metalness={0.65}
          roughness={0.12}
          clearcoat={0.5}
          clearcoatRoughness={0.12}
        />
      </mesh>
    </Float>
  );
});


/* ------------------------------------------------------------
   Chrome Sphere
   ------------------------------------------------------------ */

const ChromeSphere = memo(function ChromeSphere({
  position = [0, 0, 0],
  scale = 1,
}) {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.4}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
      >
        {/* 24x24 instead of original 64x64 */}
        <sphereGeometry
          args={[1, 24, 24]}
        />

        <meshStandardMaterial
          color="#EEEEEE"
          metalness={0.9}
          roughness={0.12}
        />
      </mesh>
    </Float>
  );
});


/* ------------------------------------------------------------
   Crystal
   ------------------------------------------------------------ */

const CrystalShape = memo(function CrystalShape({
  position = [0, 0, 0],
  scale = 1,
}) {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.z += delta * 0.12;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.6}
      floatIntensity={0.7}
    >
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
      >
        <octahedronGeometry
          args={[1, 0]}
        />

        <meshPhysicalMaterial
          color="#FFFFFF"
          metalness={0.25}
          roughness={0.18}
          clearcoat={0.4}
          clearcoatRoughness={0.15}
        />
      </mesh>
    </Float>
  );
});


/* ============================================================
   3D COMPOSITION
   ============================================================ */

function Loader3DScene() {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const { x, y } = state.pointer;

    /* Very small mouse movement */
    const targetRotationY = x * 0.18;
    const targetRotationX = -y * 0.18;

    groupRef.current.rotation.y =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        delta * 2
      );

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        delta * 2
      );
  });

  return (
    <group ref={groupRef}>

      {/* =====================================================
          LIGHTING
          ===================================================== */}

      <ambientLight
        intensity={1.5}
      />

      <directionalLight
        position={[5, 6, 5]}
        intensity={2}
      />

      <directionalLight
        position={[-4, -3, -4]}
        intensity={0.7}
        color="#6d001a"
      />

      {/* =====================================================
          OBJECTS
          ===================================================== */}

      <GlassRing
        position={[0, 0.05, 0]}
        scale={1}
      />

      <ChromeSphere
        position={[1.7, 1.1, -0.5]}
        scale={0.7}
      />

      <CrystalShape
        position={[-1.6, -1, -0.6]}
        scale={0.7}
      />

    </group>
  );
}


/* ============================================================
   STARTUP SOUND
   ============================================================ */

function playStartupSound(muted) {
  if (muted) return;

  try {
    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) return;

    const ctx = new AudioContext();

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const now = ctx.currentTime;

    const notes = [
      523.25,
      659.25,
      783.99,
      987.77,
    ];

    notes.forEach((freq, index) => {
      const oscillator =
        ctx.createOscillator();

      const gain =
        ctx.createGain();

      const startTime =
        now + index * 0.08;

      oscillator.type = "sine";

      oscillator.frequency.setValueAtTime(
        freq,
        startTime
      );

      gain.gain.setValueAtTime(
        0.001,
        startTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.08,
        startTime + 0.05
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        startTime + 1.2
      );

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start(startTime);

      oscillator.stop(
        startTime + 1.3
      );
    });

  } catch {
    // Ignore audio errors
  }
}


/* ============================================================
   LOADING MESSAGES
   ============================================================ */

const LOADING_MESSAGES = [
  "Loading Assets...",
  "Preparing Creativity...",
  "Building Experiences...",
  "Rendering 3D...",
  "Optimizing Performance...",
  "Launching SPY GRAPHIX...",
];


/* ============================================================
   INTRO LOADER
   ============================================================ */

export function IntroLoader() {
  const {
    isLoading,
    setIsLoading,
  } = useLoader();

  /* ----------------------------------------------------------
     State
     ---------------------------------------------------------- */

  const [statusTextIndex, setStatusTextIndex] =
    useState(0);

  const [muted, setMuted] =
    useState(true);

  const [isMobile, setIsMobile] =
    useState(() => {
      if (typeof window === "undefined") {
        return false;
      }

      return window.innerWidth < 768;
    });


  /* ----------------------------------------------------------
     Refs
     ---------------------------------------------------------- */

  const mutedRef =
    useRef(muted);

  const loaderRef =
    useRef(null);

  const titleContainerRef =
    useRef(null);

  const sloganRef =
    useRef(null);

  const progressBarRef =
    useRef(null);

  const percentageRef =
    useRef(null);


  /* ----------------------------------------------------------
     Keep muted ref updated
     ---------------------------------------------------------- */

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);


  /* ----------------------------------------------------------
     Mobile detection
     ---------------------------------------------------------- */

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );
    };
  }, []);


  /* ----------------------------------------------------------
     Loading message rotation
     ---------------------------------------------------------- */

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setStatusTextIndex(
        (previous) =>
          (previous + 1) %
          LOADING_MESSAGES.length
      );
    }, 700);

    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);


  /* ==========================================================
     GSAP ANIMATION
     ========================================================== */

  useEffect(() => {
    if (!isLoading) return;

    const context = gsap.context(() => {

      const timeline =
        gsap.timeline();

      /* ------------------------------------------------------
         1. Fade in
         ------------------------------------------------------ */

      timeline.fromTo(
        loaderRef.current,

        {
          opacity: 0,
        },

        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        }
      );


      /* ------------------------------------------------------
         2. Logo reveal
         ------------------------------------------------------ */

      timeline.fromTo(
        ".intro-letter",

        {
          y: 60,
          opacity: 0,
          rotateX: -40,
          filter: "blur(5px)",
        },

        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.75,
          stagger: 0.035,
          ease: "power3.out",
        }
      );


      /* ------------------------------------------------------
         3. Tagline
         ------------------------------------------------------ */

      timeline.fromTo(
        sloganRef.current,

        {
          opacity: 0,
          y: 12,
          letterSpacing: "0.2em",
        },

        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.35em",
          duration: 0.6,
          ease: "power2.out",
        },

        "-=0.3"
      );


      /* ------------------------------------------------------
         4. Metadata
         ------------------------------------------------------ */

      timeline.fromTo(
        ".intro-meta",

        {
          opacity: 0,
          y: -8,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
        },

        "-=0.35"
      );


      /* ======================================================
         PROGRESS
         
         IMPORTANT:
         We do NOT call setProgress() anymore.
         The DOM is updated directly.
         ====================================================== */

      const progressObject = {
        value: 0,
      };


      gsap.to(
        progressObject,

        {
          value: 100,

          duration: 2.4,

          ease: "power2.inOut",

          onUpdate: () => {
            const value =
              Math.floor(
                progressObject.value
              );


            /* Progress bar */

            if (
              progressBarRef.current
            ) {
              progressBarRef.current.style.width =
                `${value}%`;
            }


            /* Percentage */

            if (
              percentageRef.current
            ) {
              percentageRef.current.textContent =
                `${value < 10 ? `0${value}` : value}%`;
            }
          },


          onComplete: () => {
            playStartupSound(
              mutedRef.current
            );


            /* ================================================
               EXIT ANIMATION
               ================================================ */

            const exitTimeline =
              gsap.timeline({
                onComplete: () => {
                  setIsLoading(false);
                },
              });


            /* Logo */

            exitTimeline.to(
              titleContainerRef.current,

              {
                scale: 0.97,
                opacity: 0,
                filter: "blur(4px)",
                duration: 0.4,
                ease: "power2.inOut",
              }
            );


            /* Tagline */

            exitTimeline.to(
              sloganRef.current,

              {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power2.in",
              },

              "<"
            );


            /* Metadata */

            exitTimeline.to(
              ".intro-meta",

              {
                opacity: 0,
                duration: 0.25,
              },

              "<"
            );


            /* Loader */

            exitTimeline.to(
              loaderRef.current,

              {
                yPercent: -100,
                opacity: 0,
                duration: 0.65,
                ease: "expo.inOut",
              }
            );
          },
        }
      );

    }, loaderRef);


    return () => {
      context.revert();
    };

  }, [
    isLoading,
    setIsLoading,
  ]);


  /* ==========================================================
     SKIP INTRO
     ========================================================== */

  const handleSkip = () => {
    playStartupSound(
      mutedRef.current
    );

    gsap.to(
      loaderRef.current,

      {
        opacity: 0,
        scale: 0.98,
        duration: 0.3,
        ease: "power2.out",

        onComplete: () => {
          setIsLoading(false);
        },
      }
    );
  };


  /* ----------------------------------------------------------
     Don't render when loading is finished
     ---------------------------------------------------------- */

  if (!isLoading) {
    return null;
  }


  /* ----------------------------------------------------------
     Brand
     ---------------------------------------------------------- */

  const brandText =
    "SPY GRAPHIX";

  const letters =
    brandText.split(" ");


  /* ==========================================================
     UI
     ========================================================== */

  return (
    <div
      ref={loaderRef}

      className="
        fixed
        inset-0
        z-9999
        bg-[#FAFAFA]
        text-[#111111]
        flex
        flex-col
        justify-between
        p-6
        md:p-12
        overflow-hidden
        select-none
      "
      style={{
        perspective: "1000px",
      }}
    >

      {/* ======================================================
          SMALL BACKGROUND ACCENT
          No huge blur / no blur-3xl
          ====================================================== */}

      <div
        className="
          absolute
          top-1/3
          left-1/4
          -translate-x-1/2
          -translate-y-1/2
          w-88
          h-88
          bg-[#6d001a]/5
          rounded-full
          pointer-events-none
        "
      />


      {/* ======================================================
          TOP HEADER
          ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          items-center
          justify-between
          intro-meta
        "
      >

        {/* Brand */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <span
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-[#6d001a]
            "
          />

          <span
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              font-bold
              text-[#111111]/80
              flex
              items-center
              gap-1.5
            "
          >

            <Sparkles
              className="
                w-3.5
                h-3.5
                text-[#6d001a]
              "
            />

            SPY GRAPHIX —
            CREATIVE STUDIO

          </span>

        </div>


        {/* Controls */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* Sound */}

          <button
            type="button"
            onClick={() =>
              setMuted(
                (previous) =>
                  !previous
              )
            }
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-widest
              px-3.5
              py-1.5
              rounded-full
              bg-white
              border
              border-black/10
              hover:border-[#6d001a]
              transition-colors
              cursor-pointer
            "
            title={
              muted
                ? "Unmute Sound"
                : "Mute Sound"
            }
          >

            {muted ? (
              <VolumeX
                className="
                  w-3.5
                  h-3.5
                  text-[#777777]
                "
              />
            ) : (
              <Volume2
                className="
                  w-3.5
                  h-3.5
                  text-[#6d001a]
                "
              />
            )}

            <span className="hidden sm:inline">
              {muted
                ? "Muted"
                : "Sound On"}
            </span>

          </button>


          {/* Skip */}

          <button
            type="button"
            onClick={handleSkip}
            className="
              flex
              items-center
              gap-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-widest
              px-4
              py-1.5
              rounded-full
              bg-[#111111]
              text-white
              hover:bg-[#6d001a]
              transition-colors
              cursor-pointer
            "
          >

            <span>
              Skip Intro
            </span>

            <FastForward
              className="
                w-3
                h-3
              "
            />

          </button>

        </div>

      </div>


      {/* ======================================================
          MAIN CONTENT
          ====================================================== */}

      <div
        className="
          relative
          z-20
          my-auto
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-8
          items-center
          w-full
          max-w-7xl
          mx-auto
        "
      >

        {/* ====================================================
            LEFT SIDE
            ==================================================== */}

        <div
          className="
            lg:col-span-7
            text-left
            flex
            flex-col
            justify-center
            py-4
          "
        >

          <div
            ref={titleContainerRef}
            className="
              overflow-hidden
              py-2
            "
          >

            <h1
              className="
                text-5xl
                sm:text-7xl
                md:text-8xl
                lg:text-[105px]
                xl:text-[120px]
                font-serif
                font-black
                tracking-tighter
                text-[#111111]
                leading-[0.9]
                flex
                flex-wrap
              "
            >

              {letters.map(
                (char, index) => (
                  <span
                    key={index}
                    className="
                      intro-letter
                      inline-block
                      transform-gpu
                    "
                    style={{
                      whiteSpace:
                        char === " "
                          ? "pre"
                          : "normal",
                    }}
                  >
                    {char === " "
                      ? "\u00A0"
                      : char}
                  </span>
                )
              )}

            </h1>

          </div>


          {/* Tagline */}

          <div
            ref={sloganRef}
            className="
              mt-6
              text-xs
              sm:text-sm
              md:text-base
              font-bold
              uppercase
              text-[#6d001a]
              tracking-[0.35em]
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                w-8
                h-0.5
                bg-[#6d001a]
                hidden
                sm:inline-block
              "
            />

            Creative.
            Digital.
            Extraordinary.

          </div>

        </div>


        {/* ====================================================
            RIGHT SIDE 3D
            ==================================================== */}

        <div
          className="
            lg:col-span-5
            h-70
            sm:h-85
            md:h-95
            relative
            rounded-3xl
            overflow-hidden
            border
            border-white
            bg-white/70
            shadow-soft
          "
        >

          {/* Desktop 3D */}

          {!isMobile && (
            <Suspense
              fallback={
                <div
                  className="
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                    text-xs
                    uppercase
                    font-bold
                    text-[#777777]
                  "
                >
                  Loading 3D...
                </div>
              }
            >

              <Canvas
                camera={{
                  position: [
                    0,
                    0,
                    7.5,
                  ],
                  fov: 45,
                }}

                /* IMPORTANT:
                   DPR 1 = much lower GPU usage */

                dpr={1}

                gl={{
                  antialias: false,
                  alpha: true,
                  powerPreference:
                    "high-performance",
                }}

                performance={{
                  min: 0.5,
                }}
              >

                <Loader3DScene />

              </Canvas>

            </Suspense>
          )}


          {/* =================================================
              MOBILE FALLBACK
              ================================================= */}

          {isMobile && (
            <div
              className="
                w-full
                h-full
                flex
                flex-col
                items-center
                justify-center
                p-6
                text-center
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-full
                  border-2
                  border-[#6d001a]
                  border-t-transparent
                  animate-spin
                  mb-4
                "
              />

              <span
                className="
                  text-xs
                  uppercase
                  font-bold
                  tracking-widest
                  text-[#111111]
                "
              >
                SPY GRAPHIX 3D
              </span>

            </div>
          )}


          {/* Badge */}

          <div
            className="
              absolute
              bottom-3
              right-3
              px-3
              py-1
              rounded-full
              bg-white
              border
              border-black/5
              text-[9px]
              font-bold
              uppercase
              tracking-widest
              text-[#111111]
              pointer-events-none
            "
          >
            Interactive 3D Stage
          </div>

        </div>

      </div>


      {/* ======================================================
          BOTTOM PROGRESS
          ====================================================== */}

      <div
        className="
          relative
          z-20
          space-y-4
          intro-meta
          w-full
          max-w-7xl
          mx-auto
        "
      >

        {/* Status */}

        <div
          className="
            flex
            items-end
            justify-between
            text-xs
            font-semibold
            tracking-wider
            text-[#111111]/80
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-widest
                text-[#777777]
              "
            >
              Status:
            </span>

            <span
              className="
                text-[#6d001a]
                font-bold
                uppercase
              "
            >
              {
                LOADING_MESSAGES[
                statusTextIndex
                ]
              }
            </span>

          </div>


          {/* Percentage */}

          <div
            ref={percentageRef}
            className="
              font-serif
              italic
              font-bold
              text-3xl
              sm:text-5xl
              text-[#111111]
            "
          >
            00%
          </div>

        </div>


        {/* Progress Bar */}

        <div
          className="
            w-full
            h-0.75
            bg-black/10
            rounded-full
            overflow-hidden
          "
        >

          <div
            ref={progressBarRef}
            className="
              h-full
              bg-[#6d001a]
              rounded-full
            "
            style={{
              width: "0%",
            }}
          />

        </div>


        {/* Footer */}

        <div
          className="
            flex
            justify-between
            items-center
            text-[10px]
            text-[#888888]
            font-semibold
            uppercase
            tracking-widest
            pt-1
          "
        >

          <span>
            Awwwards Winning
            Creative Agency
          </span>

          <span className="hidden sm:inline">
            Tokyo • Delhi • London • Mumbai
          </span>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   EXPORT
   ============================================================ */

export default IntroLoader;