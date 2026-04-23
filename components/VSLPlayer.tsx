"use client";

import { useState } from "react";

interface VSLPlayerProps {
  videoSrc?: string;
  posterSrc?: string;
  placeholder?: string;
}

/**
 * Player de VSL com fallback elegante.
 * - Se videoSrc estiver preenchido: mostra player nativo
 * - Se não: mostra placeholder com foto (imagem em /public/images/)
 *
 * Uso:
 *   <VSLPlayer /> -> placeholder (enquanto VSL não estiver gravado)
 *   <VSLPlayer videoSrc="/videos/vsl-mapa.mp4" posterSrc="/images/marcio-hero.jpg" />
 */
export default function VSLPlayer({
  videoSrc,
  posterSrc = "/images/marcio-hero.jpg",
  placeholder = "[retrato pai márcio]",
}: VSLPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Sem vídeo ainda: placeholder visual elegante
  if (!videoSrc) {
    return (
      <div className="relative bg-ink-mid rounded-lg aspect-[4/5] md:aspect-[3/4] flex items-center justify-center text-mute-deeper text-sm border border-mute-deeper/30 border-dashed overflow-hidden">
        <div className="text-center p-6">
          <div className="mb-3 opacity-50">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mx-auto"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
          </div>
          <p className="text-xs opacity-60">{placeholder}</p>
        </div>
      </div>
    );
  }

  // Com vídeo: player completo
  return (
    <div className="relative rounded-lg overflow-hidden bg-black aspect-[4/5] md:aspect-[3/4]">
      <video
        className="w-full h-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        controls={isPlaying}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
      />
      {!isPlaying && (
        <button
          onClick={(e) => {
            const video = e.currentTarget
              .previousElementSibling as HTMLVideoElement;
            if (video) {
              video.play();
              setIsPlaying(true);
            }
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
          aria-label="Reproduzir vídeo"
        >
          <div className="bg-gold/90 group-hover:bg-gold text-ink rounded-full p-5 transition-all group-hover:scale-110">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
