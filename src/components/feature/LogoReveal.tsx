import { useState, useEffect } from 'react';

export function LogoReveal() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Check if animation has already played in this session
    const played = sessionStorage.getItem('logoRevealPlayed');
    
    if (played) {
      setIsVisible(false);
      setHasPlayed(true);
      return;
    }

    // Mark as played
    sessionStorage.setItem('logoRevealPlayed', 'true');

    // Hide after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      setHasPlayed(true);
    }, 2500);

    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (hasPlayed && !isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`transform transition-all duration-1000 ease-out ${
          isVisible
            ? 'opacity-100 scale-100 rotate-0'
            : 'opacity-0 scale-95 rotate-3'
        }`}
        style={{
          animation: isVisible ? 'logoReveal 2s ease-out forwards' : 'none',
        }}
      >
        <div className="text-center">
          <h1
            className="text-8xl md:text-9xl font-bold text-primary-900"
            style={{ fontFamily: '"Pacifico", serif' }}
          >
            BOOP<sup className="text-4xl md:text-5xl">®</sup>
          </h1>
          <p className="text-xl md:text-2xl text-primary-600 mt-4 tracking-wider">
            MİMARLIK İNŞAAT
          </p>
        </div>
      </div>

      <style>{`
        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-5deg);
          }
          40% {
            opacity: 1;
            transform: scale(1.05) rotate(2deg);
          }
          60% {
            transform: scale(0.98) rotate(-1deg);
          }
          80% {
            transform: scale(1.02) rotate(0.5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
