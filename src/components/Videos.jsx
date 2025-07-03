import { useState } from 'react';

export const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(0);

    const videos = [
  {
    id: 1,
    thumbnail: "/maintrailer2.jpg",
    label: "TICKETS ON SALE",
  },
  {
    id: 2,
    thumbnail: "/officialtrailer2.jpg",
    label: "OFFICIAL TRAILER",
  },
  {
    id: 3,
    thumbnail: "/officialteaser2.jpg",
    label: "TEASER TRAILER",
  },
  {
    id: 4,
    thumbnail: "/sneakpeek2.jpg",
    label: "SNEAK PEEK",
  },
  {
    id: 5,
    thumbnail: "/btslook2.jpg",
    label: "BEHIND THE SCENES",
  },
];


  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white">
      <div className="text-center mt-20">
        <h1 className=" font-ccultimatum text-7xl md:text-6xl font-bold tracking-[0.1em] text-red-500 -mb-14">
          VIDEOS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 scale-75">
        {/* Main Video */}
        <div className="relative mb-8">
          <div 
            className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
            style={{
              backgroundImage: `url(${videos[activeVideo].thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
                backgroundPosition: 'center'
                }}
                >
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] bg-white border-y-2 border-black py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-ccultimatum">
                <p className="text-black font-bold tracking-wide text-xs md:text-sm">{video.label}</p>
            </div>
         </div>
            ))}
        </div>
      </div>
    </div>
  );
}