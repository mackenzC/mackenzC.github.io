import { useState, useEffect, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";

// 3D MODELS
import CapybaraScene from "./components/3d/CapybaraScene";
import SteamEffect from "./components/3d/SteamEffect";
import Firefly from "./components/3d/Firefly";

// SECTIONS
import About from "./components/sections/About";
import Portfolio from "./components/sections/Portfolio";
import Contacts from "./components/sections/Contacts";

import Loader from "./components/ui/Loader";

export default function App() {
  function DynamicFov() {
    const { camera, size } = useThree();

    useEffect(() => {
      camera.fov = size.width < 768 ? 37 : 27;
      camera.updateProjectionMatrix();
    }, [size.width, camera]);

    return null;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#252336] text-gray-400">
        <Loader />
        <div className="relative w-full h-[60vh] mt-[5px] md:mt-[45px]">
          <img
            className="absolute w-[70px] md:w-[90px] left-1/2 -translate-x-1/2 top-20 md:top-4 pointer-events-none opacity-80 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]"
            src="/assets/moon.svg"
            alt="moon"
          />
          <Canvas
            className="relative z-10"
            camera={{ position: [14.9, 6.8, 3.8], fov: 27 }}
          >
            <DynamicFov />
            <hemisphereLight
              args={["#f8e8b6", "#004aa5", 1.5]}
              position={[10, 50, 10]}
            />
            <Suspense fallback={null}>
              <PresentationControls
                global={true}
                cursor={true}
                polar={[0, 0]}
                azimuth={[-Math.PI, Math.PI]}
                snap={true}
                speed={2}
              >
                <group position={[0, -1.5, 0]}>
                  <SteamEffect />
                  <CapybaraScene />
                  <Firefly />
                  <Firefly />
                  <Firefly />
                  <Firefly />
                  <Firefly />
                </group>
              </PresentationControls>
            </Suspense>
          </Canvas>
        </div>

        <main className="flex flex-col gap-10 w-[350px] md:w-[800px] -mt-[60px] md:mt-[20px]">
          <section>
            <About />
          </section>
          <section className="pt-[30px]" id="portfolio">
            <Portfolio />
          </section>
          <section>
            <Contacts />
          </section>
          <a className="block text-center" href="#">
            <span className="text-[18px] hover:text-white transition-colors duration-200">
              Back to Top
            </span>
          </a>
          <footer className="text-center opacity-60">
            Made with 💚 by Mackenzie Chung
          </footer>
        </main>
      </div>
    </>
  );
}
