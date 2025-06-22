import React, { useState, useEffect, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight, FiLoader } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const allImages = [
  // User's current image list
  '/Images/realimages/IMG_20220506_103613.jpg',
  '/Images/realimages/IMG_20220515_121455.jpg',
  '/Images/realimages/IMG_20220525_114232.jpg',
  '/Images/realimages/IMG_20220602_111741.jpg',
  '/Images/realimages/IMG_20220615_110540.jpg',
  '/Images/realimages/IMG_20220615_110605.jpg',
  '/Images/realimages/IMG_20220705_114831.jpg',
  '/Images/realimages/IMG_20220826_104534.jpg',
  '/Images/realimages/IMG_20221012_111414.jpg',
  '/Images/realimages/IMG_20221018_112006.jpg',
  '/Images/realimages/IMG_20221018_112021.jpg',
  '/Images/realimages/IMG_20230127_123912.jpg',
  '/Images/realimages/IMG_20230303_131528.jpg',
  '/Images/realimages/IMG_20230411_164404.jpg',
  '/Images/realimages/IMG_20230411_164422.jpg',
  '/Images/realimages/IMG_20231022_165056.jpg',
  '/Images/realimages/IMG_20231022_165058.jpg',
  '/Images/realimages/IMG_20231122_142531.jpg',
  '/Images/realimages/IMG_20240113_134900.jpg',
  '/Images/realimages/IMG_20240113_134909.jpg',
  '/Images/realimages/IMG_20240113_134912.jpg',
  '/Images/realimages/IMG_20240113_134914.jpg',
  '/Images/realimages/IMG_20240212_131644.jpg',
  '/Images/realimages/IMG_20240221_122408.jpg',
  '/Images/realimages/IMG_20240221_122412.jpg',
  '/Images/realimages/IMG_20240221_122419.jpg',
  '/Images/realimages/IMG_20240221_122503.jpg',
  '/Images/realimages/IMG_20240507_094011.jpg',
  '/Images/realimages/IMG_20240507_094108.jpg',
  '/Images/realimages/IMG_20240517_115803.jpg',
  '/Images/realimages/IMG_20240824_093940.jpg',
  '/Images/realimages/IMG_20240824_093941.jpg',
  '/Images/realimages/IMG_20240824_093949.jpg',
  '/Images/realimages/IMG_20241109_101025.jpg',
  '/Images/realimages/IMG_20241126_080548.jpg',
  '/Images/realimages/IMG_20241126_080553.jpg',
  '/Images/realimages/IMG_20250225_103256.jpg',
  '/Images/realimages/IMG_20250410_102606.jpg',
  '/Images/realimages/IMG_20250412_123736.jpg',
  '/Images/realimages/IMG_20250418_165924.jpg',
  '/Images/realimages/IMG_20250613_114004.jpg',
  '/Images/realimages/IMG_20250613_114121.jpg',
  '/Images/realimages/IMG_20250613_115556.jpg',
  '/Images/realimages/IMG_20250613_115557.jpg',
  '/Images/realimages/IMG_20250615_090008.jpg',
  '/Images/realimages/IMG_20250615_090234.jpg',
  '/Images/realimages/IMG_20250615_090253.jpg',
  '/Images/realimages/Snapchat-1993090342.jpg',
  '/Images/realimages/Snapchat-2098051749.jpg',
];

function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(16 / 9); // Default
  const [autoPlay, setAutoPlay] = useState(true);

  // Sort images by aspect ratio on mount
  useEffect(() => {
    const sortImages = async () => {
      const promises = allImages.map(src => {
        return new Promise(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve({ src, ratio: img.naturalWidth / img.naturalHeight });
          img.onerror = () => resolve({ src, ratio: 0 }); // Treat errors as un-sortable
        });
      });
      
      const results = await Promise.all(promises);

      const landscapes = results.filter(res => res.ratio > 1.05);
      const portraits = results.filter(res => res.ratio < 0.95);
      const squares = results.filter(res => res.ratio >= 0.95 && res.ratio <= 1.05);

      const sorted = [...landscapes, ...squares, ...portraits].map(res => res.src);
      
      setImages(sorted);
      setIsLoading(false);
    };

    sortImages();
  }, []);

  // Update aspect ratio when image changes
  useEffect(() => {
    if (images.length === 0) return;
    const img = new Image();
    img.src = images[current];
    img.onload = () => {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
    };
  }, [current, images]);
  
  const prev = useCallback(() => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }, [current, images.length]);

  const next = useCallback(() => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }, [current, images.length]);
  
  // Auto-play slideshow
  useEffect(() => {
    let interval;
    if (autoPlay && !lightboxOpen && images.length > 0) {
      interval = setInterval(next, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, lightboxOpen, images.length, next]);

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (images.length === 0) return;
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'Escape') closeLightbox();
      } else {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, current, images, prev, next]);

  if (isLoading) {
    return (
      <div className="my-8 text-center text-gray-400 py-24 flex flex-col items-center justify-center min-h-[400px]">
        <FiLoader className="animate-spin text-4xl text-yellow-400 mb-4" />
        <p className="font-semibold text-lg text-white">Organizing Gallery...</p>
        <p>Sorting images for the best viewing experience.</p>
      </div>
    );
  }

  return (
    <div className="my-8 flex justify-center items-center">
      <div className="max-w-4xl w-full mx-auto px-4">
        {/* Adaptive Card Container */}
        <div 
          className="relative bg-gray-900/50 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 hover:shadow-yellow-400/20"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          
          {/* Aspect Ratio Box */}
          <div
            className="relative w-full transition-[padding-bottom] duration-500 ease-in-out"
            style={{ paddingBottom: `${(1 / aspectRatio) * 100}%` }}
          >
            {images.length > 0 && (
              <>
                <AnimatePresence initial={false}>
                  <motion.img
                    key={images[current]}
                    src={images[current]}
                    alt={`Project ${current + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, position: 'absolute' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onClick={openLightbox}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none"></div>

                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 shadow-lg transition-all z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  <FiArrowLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 shadow-lg transition-all z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
                >
                  <FiArrowRight size={24} />
                </button>
                
                <div className="absolute bottom-4 left-4 text-white font-semibold bg-black/50 px-3 py-1 rounded-full text-sm pointer-events-none">
                  {current + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && images.length > 0 && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-5 right-5 text-white text-4xl hover:text-yellow-400 transition-colors z-50" aria-label="Close">
            &times;
          </button>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={(e) => { e.stopPropagation(); prev(); }} 
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 shadow-lg transition-all z-50"
              aria-label="Previous image"
            >
              <FiArrowLeft size={24} />
            </button>
            <AnimatePresence initial={false}>
              <motion.img
                key={`lightbox-${images[current]}`}
                src={images[current]}
                alt={`Project ${current + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, position: 'absolute' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </AnimatePresence>
            <button 
              onClick={(e) => { e.stopPropagation(); next(); }} 
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 shadow-lg transition-all z-50"
              aria-label="Next image"
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;