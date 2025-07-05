import { useState } from 'react';

export const Gallery = () => {
  const [activeVideo, setActiveVideo] = useState(0);

    const videos = [
  {
    id: 1,
    thumbnail: "/super-pup.webp",
  },
  {
    id: 2,
    thumbnail: "/fortress.webp",
  },
  {
    id: 3,
    thumbnail: "/ssave.webp",
  },
  {
    id: 4,
    thumbnail: "/still.webp",
  },
  {
    id: 5,
    thumbnail: "/dailyteam.webp",
  },
  {
    id: 6,
    thumbnail: "/supermanandlois.webp",
  },
  {
    id: 7,
    thumbnail: "/justicegang.webp",
  },
  {
    id: 8,
    thumbnail: "/superlex.webp",
  },
  {
    id: 9,
    thumbnail: "/terrific.webp",
  },
  {
    id: 10,
    thumbnail: "/lex.webp",
  },
];


  return (
    <section id='Videos'>
    <div className="min-h-screen overflow-hidden bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white">
      <div className="text-center mt-20">
        <h1 className=" font-ccultimatum text-7xl md:text-6xl font-bold tracking-[0.1em] text-red-500 -mb-14">
          GALLERY
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 scale-75">
        {/* Main Video */}
        <div className="relative mb-8">
          <div 
            className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer outline outline-yellow-400 shadow-2xl shadow-red-900/40"
            style={{
              backgroundImage: `url(${videos[activeVideo].thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
         {videos.map((video, index) => (
            <div
                key={video.id}
                className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300 group ${
                index === activeVideo 
                ? 'ring-2 ring-red-500 scale-105' 
                : 'hover:scale-105 hover:ring-1 hover:ring-amber-400'
                }`}
                onClick={() => setActiveVideo(index)}
                style={{
                backgroundImage: `url(${video.thumbnail})`,
                backgroundSize: 'cover',
                }}
                >
            </div>
            ))}
        </div>
      </div>
    </div>
    </section>
  );
}