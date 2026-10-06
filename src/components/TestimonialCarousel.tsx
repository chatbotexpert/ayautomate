"use client";

import { useState, useRef, useEffect } from "react";

const videosData = [
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/adstronaut-elie-salame-coo.webm",
    poster:
      "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-adstronaut-elie-salame-coo.jpg",
    name: "Elie Salame",
    title: "COO · Adstronaut.io",
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/narrative-wytze-de-haan-cofounder.webm",
    poster:
      "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-narrative-wytze-de-haan-cofounder.webp",
    name: "Wytze de Haan",
    title: "Co-founder · Narrative",
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/easyclick-ana-maria-martinez-ceo.webm",
    poster:
      "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-easyclick-ana-maria-martinez-ceo.webp",
    name: "Ana María Martínez",
    title: "CEO · Easyclick",
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/untaylored-roald-larsen-ceo.webm",
    poster:
      "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-untaylored-roald-larsen-ceo.jpg",
    name: "Roald Larsen",
    title: "CEO · Untaylored",
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/meetlexi-jim-adams-ceo.webm",
    poster:
      "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-meetlexi-jim-adams-ceo.jpg",
    name: "Jim Adams",
    title: "CEO · Meetlexi",
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/earleads-othmane-khadri-founder.webm",
    poster:
      "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-earleads-othmane-khadri-founder.webp",
    name: "Othmane Khadri",
    title: "Founder · Earleads",
  },
  {
    url: "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/uniworx-connor-miller-technical-director.webm",
    poster:
      "https://cdn.ayautomate.com/storage/v1/object/public/video-testimonials/poster-uniworx-connor-miller-technical-director.jpg",
    name: "Connor Miller",
    title: "Technical Director · Uniworx",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Play active video, pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play().catch((e) => console.log("Auto-play prevented", e));
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
    <div className="w-full max-w-[1400px] mx-auto py-16 sm:py-24">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-10 md:mb-16 px-4 max-w-[1100px] mx-auto">
        <div className="flex-none">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8082C1] mb-4">
            DON'T TAKE IT FROM US
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-white leading-[1.1]">
            Hear it from the <span className="text-[#8082C1] italic">operators</span><br />
            <span className="text-[#8082C1] italic">we shipped for.</span>
          </h2>
        </div>
        <div className="max-w-[320px] mb-2">
          <p className="text-[#8F8F99] text-[15px] leading-relaxed">
            Real founders. Real cameras. No scripts. Different<br className="hidden md:block" /> scales, same agent stack.
          </p>
        </div>
      </div>

      {/* Horizontal Flex Carousel */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        {visibleIndices.map((idx, positionIndex) => {
          const videoInfo = videosData[idx];
          let sizeClass =
            "w-[140px] lg:w-[160px] opacity-40 z-0 hidden md:block";
          if (positionIndex === 2)
            sizeClass = "w-[240px] lg:w-[280px] opacity-100 z-20";
          else if (positionIndex === 1 || positionIndex === 3)
            sizeClass = "w-[180px] lg:w-[200px] opacity-60 z-10";

          const isActive = positionIndex === 2;

          return (
            <div
              key={`${idx}-${positionIndex}`}
              onClick={() => setActiveIndex(idx)}
              className={`relative cursor-pointer transition-all duration-500 ease-out flex-shrink-0 flex items-center justify-center aspect-[9/16] ${sizeClass}`}
            >
              <div
                className={`relative w-full h-full overflow-hidden transition-all duration-500 border border-gray-800 shadow-2xl ${isActive ? "ring-1 ring-[#8082C1]" : ""}`}
              >
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
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="ml-1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Info Overlay Gradient */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/80 to-transparent">
                      <h4 className="text-white font-bold text-lg">
                        {videoInfo.name}
                      </h4>
                      <p className="text-gray-300 text-xs mt-1">
                        {videoInfo.title}
                      </p>
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
                ? "w-8 h-2.5 bg-[#8082C1]"
                : "w-2.5 h-2.5 bg-[#2A2A35] hover:bg-[#3A3A45]"
            }`}
            aria-label={`Go to video ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
