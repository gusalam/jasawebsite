import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import musicPlayerBg from '@/assets/music-player-bg.jpg';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Try to autoplay when component mounts (may be blocked by browser)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt autoplay
    const tryAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        // Autoplay was blocked, user needs to interact
        console.log('Autoplay blocked, waiting for user interaction');
      }
    };

    tryAutoplay();

    // Cleanup on unmount (when leaving the page)
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
      setHasInteracted(true);
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
        preload="auto"
      />

      {/* Floating music control button */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying 
            ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsla(210,100%,55%,0.5)]' 
            : 'bg-card/80 text-muted-foreground border border-border hover:border-primary/50'
        }`}
        aria-label={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
        title={isPlaying ? 'Matikan musik' : 'Nyalakan musik'}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>

      {/* First-time prompt if autoplay was blocked */}
      {!hasInteracted && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 overflow-hidden">
          {/* Background Image with blur */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${musicPlayerBg})`,
              filter: 'blur(8px)',
              transform: 'scale(1.1)',
            }}
          />
          
          {/* Dark gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
            }}
          />
          
          {/* Glassmorphism card */}
          <div className="relative z-10 max-w-sm w-full text-center rounded-3xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
              <Volume2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-3 drop-shadow-lg">
              Putar Musik Latar?
            </h3>
            <p className="text-white/80 text-sm mb-8 leading-relaxed">
              Website ini memiliki musik latar. Klik tombol di bawah untuk memulai.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setHasInteracted(true)}
                className="px-5 py-3 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                Tanpa Musik
              </button>
              <button
                onClick={() => {
                  toggleMusic();
                }}
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-sm hover:bg-white/30 transition-all border border-white/30 shadow-lg"
              >
                Putar Musik
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;
