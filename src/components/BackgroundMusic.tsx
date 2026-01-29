import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

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
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card max-w-sm text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Volume2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold font-display text-foreground mb-2">
              Putar Musik Latar?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Website ini memiliki musik latar. Klik tombol di bawah untuk memulai.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setHasInteracted(true)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Tanpa Musik
              </button>
              <button
                onClick={() => {
                  toggleMusic();
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
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
