import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Loader() {
  const { active, progress } = useProgress();
  const [fadeClass, setFadeClass] = useState("opacity-100 overflow-hidden");

  useEffect(() => {
    if (!active && progress >= 100) {
      setFadeClass("opacity-0 pointer-events-none");
    }
  }, [active, progress]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900
                  transition-opacity duration-500 ease-out ${fadeClass}`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full border-4 border-orange-400 border-t-transparent animate-spin" />

        <p className="font-mono text-lg tracking-widest text-orange-200">
          LOADING SCENE... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
