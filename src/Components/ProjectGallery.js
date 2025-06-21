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

function ProjectGallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [current]);

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="relative w-full lg:w-1/2 overflow-hidden">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className={`w-full rounded-lg transition-transform duration-700 ease-in-out ${
                index === current ? 'translate-x-0' : 'translate-x-full absolute top-0 left-0'
              }`}
            />
          ))}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 text-xl"
          >
            &lt;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 rounded-full p-2 text-xl"
          >
            &gt;
          </button>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <p
            className="italic mb-4 text-lg lg:text-xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            "At MSK Associates, every structure reflects our commitment to excellence."
          </p>
          <p className="font-semibold" style={{ fontFamily: '"Playfair Display", serif' }}>
            &mdash; Er. Myana Sai Krishna
            <br />ME (Structures), AMIE
          </p>
        </div>
      </div>
      <p className="mt-8 text-center text-blue-600 uppercase tracking-widest">
        Constructing smiles everywhere
      </p>
    </section>
  );
}

export default ProjectGallery;