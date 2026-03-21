'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
}

export function VideoModal({ isOpen, onClose, videoId = 'kfddc8ueV5U' }: VideoModalProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Initialize player when modal opens and API is ready
  useEffect(() => {
    if (!isOpen) return;

    const onYouTubeIframeAPIReady = () => {
      if (containerRef.current && !playerRef.current) {
        playerRef.current = new (window as any).YT.Player(containerRef.current, {
          videoId,
          playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            mute: isMuted ? 1 : 0, // initial mute state
          },
          events: {
            onReady: (event: any) => {
              setIsPlayerReady(true);
              // Ensure mute state matches isMuted
              if (isMuted) {
                event.target.mute();
              } else {
                event.target.unMute();
              }
            },
          },
        });
      }
    };

    // If API is already loaded
    if ((window as any).YT && (window as any).YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Wait for API to load
      (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      // Cleanup player when modal closes
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
        setIsPlayerReady(false);
      }
      // Remove global callback to avoid conflicts
      (window as any).onYouTubeIframeAPIReady = undefined;
    };
  }, [isOpen, videoId]); // only run when modal opens or videoId changes

  // Handle mute toggle
  const handleMuteToggle = () => {
    if (playerRef.current && isPlayerReady) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 mt-15 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 30,
                duration: 0.4 
              }}
              className="relative w-full max-w-5xl"
            >
              {/* Gradient border glow effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-3xl opacity-20 blur-xl"
                style={{ animation: 'pulse 3s ease-in-out infinite' }}
              />

              {/* Main video container */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl">
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent pointer-events-none" />

                {/* Video container with 16:9 aspect ratio */}
                <div className="relative aspect-video bg-black rounded-2xl m-4 sm:m-6 overflow-hidden">
                  <div
                    ref={containerRef}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Floating Control Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6 flex items-center justify-between"
                >
                  {/* Title */}
                  <div className="text-sm font-semibold text-cyan-300">
                    Cognify Platform Demo
                  </div>

                  {/* Control buttons */}
                  <div className="flex items-center gap-3">
                    {/* Mute Toggle Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleMuteToggle}
                      className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 rounded-full backdrop-blur-md hover:from-purple-500/30 hover:to-cyan-500/30 transition-all group"
                      style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' }}
                    >
                      <motion.div
                        animate={{ rotate: isMuted ? 0 : 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-purple-400" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-cyan-400" />
                        )}
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/40 rounded-full backdrop-blur-md hover:from-red-500/40 hover:to-pink-500/40 transition-all z-10 group"
                  style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)' }}
                >
                  <motion.div
                    animate={{ rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <X className="w-6 h-6 text-red-400" />
                  </motion.div>
                </motion.button>

                {/* Info text at bottom */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="px-4 sm:px-6 pb-4 text-xs text-foreground/50 flex items-center justify-between"
                >
                  <span>Press ESC to close</span>
                  <span>16:9 HD Video</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <style jsx>{`
            @keyframes pulse {
              0%, 100% {
                opacity: 0.2;
              }
              50% {
                opacity: 0.4;
              }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}