import React, { useEffect, useState } from 'react';

function AboutSection() {
  // Define state variables
  const [scrollValue, setScrollValue] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Define the sections as an array of objects with their content and image source
  const sections = [
    {
      content: "Support your users with popular topics",
      imageSrc: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-01.png",
    },
    {
      content: "Personalize the support experience",
      imageSrc: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-02.png",
    },
    {
      content: "Scale your sales using automation",
      imageSrc: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-03.png",
    },
    {
      content: "Make customer satisfaction easier",
      imageSrc: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-04.png",
    },
  ];

  // Handle scroll event and update state
  const handleScroll = () => {
    const viewportTop = window.scrollY;
    const containerEl = document.querySelector('[data-sticky-sections]');
    const containerHeight = containerEl.clientHeight;
    const containerTop = containerEl.offsetTop;
    const containerBottom = containerTop + containerHeight;

    let newScrollValue = 0;

    if (containerBottom <= viewportTop) {
      newScrollValue = sections.length + 1;
    } else if (containerTop >= viewportTop) {
      newScrollValue = 0;
    } else {
      newScrollValue = remapValue(
        viewportTop,
        containerTop,
        containerBottom,
        0,
        sections.length + 1
      );
    }

    setScrollValue(newScrollValue);
    setActiveIndex(
      Math.floor(newScrollValue) >= sections.length
        ? sections.length - 1
        : Math.floor(newScrollValue)
    );
  };

  // Remap a value from one range to another
  const remapValue = (value, start1, end1, start2, end2) => {
    const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  // Initialize the component and attach scroll event listener
  useEffect(() => {
    handleScroll(); // Initial setup
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative font-inter antialiased">
      {/* Main content */}
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden supports-[overflow:clip]:overflow-clip">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          {/* Scroll Animation */}
          <div className="max-w-md mx-auto lg:max-w-none lg:min-h-[var(--stick-items)]" data-sticky-sections>
            {sections.map((section, index) => (
              <section
                key={index}
                className={`lg:absolute lg:inset-0 lg:z-${index === activeIndex ? '1' : '0'}`}
                style={{
                  position: 'sticky',
                  top: 0,
                  '--stick-visibility': index === activeIndex ? '1' : '0',
                  '--stick-scale': index === activeIndex ? '1' : '.8',
                  opacity: index <= activeIndex ? '1' : '0', // Add this line to control opacity
                  transition: 'opacity 0.5s ease', // Add a transition for smooth fading
                }}
              >
                <div className="flex flex-col lg:min-h-full lg:flex-row space-y-4 space-y-reverse lg:space-y-0 lg:space-x-20">
                  <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                    <div className="space-y-3">
                      <div className="relative inline-flex text-indigo-500 font-semibold">
                        {section.content}
                        <svg className="fill-indigo-300 absolute top-full w-full" xmlns="http://www.w3.org/2000/svg" width="166" height="4">
                          <path d="M98.865 1.961c-8.893.024-17.475.085-25.716$. 182-2.812.019-5.023$. 083-7.622$. 116l-6.554$. 067a2910.9 2910.9 0 0 0-25.989$. 38c-4.04$. 067-7.709$. 167-11.292$. 270l-1.34$. 038c-2.587$. 073-4.924$. 168-7.762$. 220c-2.838$. 051-6.054$. 079-9.363$. 095c-1.994$. 007-2.91-. 080-3.106-. 225l-. 028-.028c-. 325-.253.203-.463 1.559-.620l. 618-.059c. 206-.020.420-.038.665-.054l1. 502-.089l3.257-.170l2.677-.132c. 902-.043 1.814-.085 2.744-.126l1. 408-.060c4.688-.205 10.095-.353 16.167-.444C37.413 1. 220 42.753 0. 980 49.120 0. 824l1. 614-.037C54.041 0. 707 57.588 0. 647 61.270 0. 600l1. 586-.020c4.250-.051 8.530-.100 12.872-.140C80.266 0. 400 84.912 0. 373 89.667 0. 354l2. 866-.010c8.639-.034 17.996 0 27.322$. 030c6.413$. 006 13.168$. 046 20.237$. 120l2. 368. 027c1.733$. 014 3.653$. 050 5.712$. 105l2. 068. 064c5.890$. 191 9.025$. 377 11.823$. 640l. 924. 090c. 802.078 1.541$. 156 2.210$. 233c1.892$. 233. 290$. 343-3.235$. 364l-3.057$. 020c-.446$. 003-.890$. 008-1.330$. 014a305.770 305.770 0 0 1-4.330-. 004c-2.917-.005-5.864-.018-8.783-.019l-4.982$. 003a447.910 447.910 0 0 1-3.932-. 020l-4.647-.014c-9.167-. 026-18.341-.028-26.923$. 030l-. 469-.043Z" />
                        </svg>
                      </div>
                      <h2 className="text-4xl text-slate-900 font-extrabold">{section.content}</h2>
                      <p className="text-lg text-slate-500">Statistics show that people browsing your webpage who receive live assistance with a chat widget are more likely to make a purchase.</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300">
                    <img width="612" height="480" src={section.imageSrc} alt={`Illustration ${index + 1}`} />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutSection;
