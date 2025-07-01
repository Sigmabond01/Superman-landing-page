import { NavbarDemo } from "./NavbarDemo";

export const Hero = () => {
  return (
    <div className="font-ccultimatum relative h-screen w-full overflow-hidden">
      <NavbarDemo />
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/supermanbg2.png')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-between px-64">

        <div className="flex-1 max-w-lg flex flex-col items-center">
          <div className="mt-24 scale-75">
            <img
              src="/superman-text.png"
              alt="Look Up Text"
              className="w-auto h-auto max-w-full"
            />
          </div>

          {/* Superman Shield Symbol */}
          <div className="mb-28">
            <img
              src="/superman-shield-symbol.png"
              alt="Superman Logo"
              className="w-48 md:w-56 lg:w-64 h-auto hover:drop-shadow-[0_0_30px_rgba(255,255,0,0.8)] hover:brightness-110 hover:scale-100 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};