import React, { useState, useEffect } from 'react';

const images = [
  '/Images/realimages/IMG_20220426_094639.jpg',
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
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [hover]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-96 overflow-hidden rounded-2xl shadow-lg bg-white flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Project ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-blue-100 text-blue-900 rounded-full p-2 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 z-10"
      >
        &lt;
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-blue-100 text-blue-900 rounded-full p-2 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 z-10"
      >
        &gt;
      </button>
    </div>
  );
}

export default PhotoGallery;