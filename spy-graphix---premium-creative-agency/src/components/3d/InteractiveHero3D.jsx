import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  memo,
} from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";

import * as THREE from "three";

/* =========================================================
   GLASS RING
   Only this object uses expensive transmission material.
========================================================= */

const GlassRing = memo(function GlassRing({
  position = [0, 0, 0],
  scale = 1,
}) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.3;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.8}
      floatIntensity={1.1}
    >
      <mesh
        ref={ref}
        position={position}
        scale={scale}
      >
        <torusGeometry
          args={[1.5, 0.42, 16, 48]}
        />

        <MeshTransmissionMaterial
          samples={2}
          resolution={128}
          transmission={0.9}
          roughness={0.15}
          thickness={0.7}
          ior={1.4}
          chromaticAberration={0.04}
          distortion={0.05}
          distortionScale={0.15}
          color="#FFFFFF"
        />
      </mesh>
    </Float>
  );
});


/* =========================================================
   CHROME SPHERE
   Cheap standard material instead of transmission.
========================================================= */

const ChromeSphere = memo(function ChromeSphere({
  position = [0, 0, 0],
  scale = 1,
}) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.25;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.5}
      floatIntensity={0.9}
    >
      <mesh
        ref={ref}
        position={position}
        scale={scale}
      >
        <sphereGeometry
          args={[1, 32, 32]}
        />

        <meshStandardMaterial
          metalness={0.95}
          roughness={0.08}
          color="#F2F2F2"
          envMapIntensity={1.8}
        />
      </mesh>
    </Float>
  );
});


/* =========================================================
   CRYSTAL
   No transmission.
========================================================= */

const CrystalShape = memo(function CrystalShape({
  position = [0, 0, 0],
  scale = 1,
}) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.z += delta * 0.12;
  });

  return (
    <Float
      speed={1.7}
      rotationIntensity={1}
      floatIntensity={1.1}
    >
      <mesh
        ref={ref}
        position={position}
        scale={scale}
      >
        <icosahedronGeometry
          args={[0.9, 0]}
        />

        <meshPhysicalMaterial
          roughness={0.15}
          metalness={0.15}
          clearcoat={0.6}
          clearcoatRoughness={0.15}
          color="#FFFFFF"
        />
      </mesh>
    </Float>
  );
});


/* =========================================================
   FLOATING CAPSULE
   No transmission.
========================================================= */

const FloatingCapsule = memo(function FloatingCapsule({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += delta * 0.15;
    ref.current.rotation.x += delta * 0.1;
  });

  return (
    <Float
      speed={1.6}
      rotationIntensity={0.9}
      floatIntensity={1}
    >
      <mesh
        ref={ref}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <capsuleGeometry
          args={[0.45, 1.6, 8, 16]}
        />

        <meshPhysicalMaterial
          roughness={0.16}
          metalness={0.15}
          clearcoat={0.7}
          clearcoatRoughness={0.1}
          color="#F8F8F8"
        />
      </mesh>
    </Float>
  );
});


/* =========================================================
   GLASS CUBE
   No transmission.
========================================================= */

const SoftGlassCube = memo(function SoftGlassCube({
  position = [0, 0, 0],
  scale = 1,
}) {
  const ref = useRef(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.8}
      floatIntensity={1}
    >
      <mesh
        ref={ref}
        position={position}
        scale={scale}
      >
        <boxGeometry
          args={[1.2, 1.2, 1.2]}
        />

        <meshPhysicalMaterial
          roughness={0.16}
          metalness={0.1}
          clearcoat={0.7}
          clearcoatRoughness={0.1}
          color="#FFFFFF"
        />
      </mesh>
    </Float>
  );
});


/* =========================================================
   MAIN COMPOSITION
========================================================= */

function FloatingComposition({ hovered, isMobile }) {
  const groupRef = useRef(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const pointer = state.pointer;

    const targetX = pointer.y * 0.22;
    const targetY = pointer.x * 0.3;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      delta * 3
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      delta * 3
    );

    const targetScale = hovered ? 1.04 : 1;

    const newScale = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      delta * 4
    );

    groupRef.current.scale.setScalar(newScale);
  });

  return (
    <group ref={groupRef}>

      {/* CENTRAL RING */}
      <GlassRing
        position={[0, 0.15, 0]}
        scale={isMobile ? 0.85 : 1.05}
      />

      {/* TOP RIGHT */}
      <ChromeSphere
        position={[2, 1.35, -0.5]}
        scale={isMobile ? 0.7 : 0.9}
      />

      {/* BOTTOM LEFT */}
      <CrystalShape
        position={[-1.8, -1.2, -0.8]}
        scale={isMobile ? 0.65 : 0.8}
      />

      {/* BOTTOM RIGHT */}
      <FloatingCapsule
        position={[1.8, -1.3, 0.6]}
        rotation={[0.6, -0.4, 0.5]}
        scale={isMobile ? 0.7 : 0.8}
      />

      {/* TOP LEFT */}
      <SoftGlassCube
        position={[-1.9, 1.3, -1]}
        scale={isMobile ? 0.6 : 0.72}
      />

      {/* SMALL CHROME SPHERE */}
      {!isMobile && (
        <ChromeSphere
          position={[-0.3, 2.1, -1.5]}
          scale={0.45}
        />
      )}

    </group>
  );
}


/* =========================================================
   MOBILE COMPOSITION
   Fewer objects = much better mobile performance.
========================================================= */

function MobileComposition({ hovered }) {
  return (
    <FloatingComposition
      hovered={hovered}
      isMobile={true}
    />
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export function InteractiveHero3D() {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkDevice
      );
    };
  }, []);

  return (
    <div
      className="
        w-full
        h-[380px]
        sm:h-[450px]
        lg:h-[540px]
        relative
        rounded-3xl
        overflow-hidden
        cursor-grab
        active:cursor-grabbing
        select-none
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <Suspense
        fallback={
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              bg-white/30
              rounded-3xl
              border
              border-black/5
            "
          >
            <div
              className="
                w-10
                h-10
                rounded-full
                border-2
                border-[#FF3B30]
                border-t-transparent
                animate-spin
              "
            />
          </div>
        }
      >

        <Canvas
          camera={{
            position: [0, 0, 7.8],
            fov: 45,
          }}

          dpr={[1, 1.5]}

          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >

          {/* LIGHTING */}

          <ambientLight
            intensity={1}
          />

          <directionalLight
            position={[8, 10, 6]}
            intensity={1.8}
          />

          <directionalLight
            position={[-8, -6, -4]}
            intensity={0.7}
            color="#FF3B30"
          />

          <pointLight
            position={[0, 4, 4]}
            intensity={1}
          />

          {/* ENVIRONMENT */}

          <Environment
            preset="city"
          />

          {/* 3D OBJECTS */}

          {isMobile ? (
            <MobileComposition
              hovered={hovered}
            />
          ) : (
            <FloatingComposition
              hovered={hovered}
              isMobile={false}
            />
          )}

        </Canvas>

      </Suspense>


      {/* BADGE */}

      <div
        className="
          absolute
          bottom-4
          right-4
          pointer-events-none
          px-3
          py-1.5
          rounded-full
          bg-white/70
          backdrop-blur-md
          border
          border-black/10
          text-[10px]
          font-bold
          uppercase
          tracking-widest
          text-[#111111]
          shadow-sm
          flex
          items-center
          gap-1.5
        "
      >

        <span
          className="
            w-2
            h-2
            rounded-full
            bg-[#FF3B30]
            animate-ping
          "
        />

        Interactive 3D Stage

      </div>

    </div>
  );
}


/* =========================================================
   MEMO EXPORT
========================================================= */

export default memo(InteractiveHero3D);


/* =========================================================
   OPTIONAL HERO3DSCENE COMPONENT
========================================================= */

export function Hero3DScene() {
  return <InteractiveHero3D />;
}