"use client";

import { useState, useRef, useEffect } from 'react';

const videosData = [
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/adstronaut-elie-salame-coo.webm",
    poster: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-adstronaut-elie-salame-coo.jpg",
    name: "Elie Salame",
    title: "COO · Adstronaut.io"
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/narrative-wytze-de-haan-cofounder.webm",
    poster: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-narrative-wytze-de-haan-cofounder.webp",
    name: "Wytze de Haan",
    title: "Co-founder · Narrative"
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/easyclick-ana-maria-martinez-ceo.webm",
    poster: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-easyclick-ana-maria-martinez-ceo.webp",
    name: "Ana María Martínez",
    title: "CEO · Easyclick"
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/untaylored-roald-larsen-ceo.webm",
    poster: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-untaylored-roald-larsen-ceo.jpg",
    name: "Roald Larsen",
    title: "CEO · Untaylored"
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/meetlexi-jim-adams-ceo.webm",
    poster: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-meetlexi-jim-adams-ceo.jpg",
    name: "Jim Adams",
    title: "CEO · Meetlexi"
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/earleads-othmane-khadri-founder.webm",
    poster: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-earleads-othmane-khadri-founder.webp",
    name: "Othmane Khadri",
    title: "Founder · Earleads"
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/uniworx-connor-miller-technical-director.webm",
    poster: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-uniworx-connor-miller-technical-director.jpg",
    name: "Connor Miller",
    title: "Technical Director · Uniworx"
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Play active video, pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch(e => console.log("Auto-play prevented", e));
          video.muted = false;
        } else {
          video.pause();
          video.currentTime = 0;
          video.muted = true;
        }
      }
    });
  }, [activeIndex]);

  // Helper to get 5 visible indices wrapped around the array
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      let idx = (activeIndex + i) % videosData.length;
      if (idx < 0) idx += videosData.length;
      indices.push(idx);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="w-full max-w-[1400px] mx-auto py-10">
      
      {/* Horizontal Flex Carousel */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        {visibleIndices.map((idx, positionIndex) => {
          const videoInfo = videosData[idx];
          const isActive = positionIndex === 2; // Middle item
          
          return (
            <div
              key={`${idx}-${positionIndex}`}
              onClick={() => setActiveIndex(idx)}
              className={`relative cursor-pointer transition-all duration-500 ease-out flex-shrink-0 flex items-center justify-center
                ${isActive 
                  ? 'w-[280px] sm:w-[320px] md:w-[360px] h-[500px] sm:h-[580px] md:h-[640px] z-20' 
                  : 'w-[140px] sm:w-[180px] md:w-[220px] h-[260px] sm:h-[320px] md:h-[400px] z-10 opacity-80 hover:opacity-100'
                }`}
            >
              <div className={`relative w-full h-full overflow-hidden transition-all duration-500 border border-gray-800 shadow-2xl ${isActive ? 'ring-1 ring-[#8082C1]' : ''}`}>
                <video
                  ref={(el) => {
                    // Only store refs using the actual index to prevent duplicates
                    if (el) videoRefs.current[idx] = el;
                  }}
                  src={videoInfo.url}
                  poster={videoInfo.poster}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  muted={!isActive}
                />
                
                {/* Active Video Elements */}
                {isActive && (
                  <>
                    {/* Play Button Overlay (shown when paused, but since we autoplay, we'll just show it for a sec or keep it as UI element) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-[#1a1a24]/80 backdrop-blur-sm flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Info Overlay Gradient */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/80 to-transparent">
                      <h4 className="text-white font-bold text-lg">{videoInfo.name}</h4>
                      <p className="text-gray-300 text-xs mt-1">{videoInfo.title}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center items-center gap-3 mt-8 md:mt-12">
        {videosData.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex 
                ? 'w-8 h-2.5 bg-[#8082C1]' 
                : 'w-2.5 h-2.5 bg-[#2A2A35] hover:bg-[#3A3A45]'
            }`}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
