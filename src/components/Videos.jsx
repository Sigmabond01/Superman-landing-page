import { useState } from 'react';

export const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(0);

    const videos = [
  {
    id: 1,
    thumbnail: "/maintrailer2.webp",
    label: "TICKETS ON SALE",
    url: "https://youtu.be/nZTgJy8ym34?si=t2P0n58DnmrGbbfo",
  },
  {
    id: 2,
    thumbnail: "/officialtrailer2.webp",
    label: "OFFICIAL TRAILER",
    url: "https://youtu.be/Ox8ZLF6cGM0?si=HBPvAbt2B_Idf5WD",
  },
  {
    id: 3,
    thumbnail: "/officialteaser2.webp",
    label: "TEASER TRAILER",
    url: "https://youtu.be/uhUht6vAsMY?si=dhmmF1niGtFzCvdt",
  },
  {
    id: 4,
    thumbnail: "/sneakpeek2.webp",
    label: "SNEAK PEEK",
    url: "https://youtu.be/xFU8U4UVUBs?si=DdotA-aJ_uU1iFVp",
  },
  {
    id: 5,
    thumbnail: "/btslook2.webp",
    label: "BEHIND THE SCENES",
    url: "https://youtu.be/Rq5LyXG8m2U?si=guGLPW1MPFzDM2zM",
  },
];


  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-tr from-red-700 via-red-900 to-red-900 text-white">
      <div className="text-center mt-20">
        <h1 className=" font-ccultimatum text-7xl md:text-6xl font-bold tracking-[0.1em] text-blue-600 -mb-14">
          VIDEOS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 scale-75">
        {/* Main Video */}
        <div className="relative mb-8 ">
          <a href={videos[activeVideo].url}
          target='_blank'
          rel="noopener noreferrer"
          className='block '>
          <div 
            className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer outline outline-yellow-400 shadow-2xl shadow-red-900/40"
            style={{
              backgroundImage: `url(${videos[activeVideo].thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </div>
          </a>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 ">
         {videos.map((video, index) => (
            <div
                key={video.id}
                className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all duration-300 group ${
                index === activeVideo 
                ? 'ring-2 ring-red-500 scale-105' 
                : 'hover:scale-105 hover:ring-1 hover:ring-white'
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