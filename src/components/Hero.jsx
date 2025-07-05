import { useRef, useEffect } from "react";
import { NavbarDemo } from "./NavbarDemo";

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play();
    },);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-ccultimatum relative h-screen w-full overflow-hidden">
      <NavbarDemo />

      {/* Fullscreen Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute"
      >
        <source src="/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-start px-80">
        <div className="flex-1 max-w-lg flex flex-col items-center">
          <div className="mt-28 scale-75">
            <img
              src="/superman-text.webp"
              alt="Look Up Text"
              className="w-auto h-auto max-w-full"
            />
          </div>

          {/* Superman Shield Symbol */}
          <div className="mb-8">
            <img
              src="/superman-shield-symbol.webp"
              alt="Superman Logo"
              className="w-48 md:w-56 lg:w-64 h-auto hover:drop-shadow-[0_0_30px_rgba(255,255,0,0.8)] hover:brightness-110 hover:scale-100 transition-all duration-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <a target="_blank" href="https://youtu.be/Ox8ZLF6cGM0?si=r6y5DPjZSg4tCgP6" className="flex-1">
              <button className="w-full px-6 py-3 bg-white/10 text-white border border-red-600 rounded-xl hover:bg-blue-500/20 hover:border-yellow-400 transition-all duration-300 flex items-center justify-center gap-2">
              WATCH TRAILER
              </button>
              </a>
              <a target="_blank" href="https://www.superman.com/home/" className="flex-1">
              <button className="w-full px-6 py-3 bg-white/10 text-white border border-red-600 rounded-xl hover:bg-blue-500/20 hover:border-yellow-400 transition-all duration-300 flex items-center justify-center gap-2">
              ORIGINAL WEBSITE
              </button>
              </a>
              </div>
        </div>
      </div>
    </div>
  );
};