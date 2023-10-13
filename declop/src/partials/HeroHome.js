import React, { useState } from 'https://cdn.skypack.dev/react';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section  id="home" className="bg-cover bg-center bg-opacity-80 bg-fixed relative " >
      <section className="relative mt-10 mb-10">

        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-7xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Become an <span className="text-orange-500">#</span><span className="bg-clip-text text-blue-600">Declopguy</span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Declop is an IT based company, but we also educate people who are very talented from mega cities to micro villages of India, marking them as @DeclopGuy</p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <a href="#courses" className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
                      <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                      <span className="relative">Start now</span>
                    </a>

                    <div className="ml-2 mb-6 md:mb-0">
                      <a href="#about" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div>
              <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex flex-col justify-center">
                  <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="77.402%" />
                        <stop stopColor="#DFDFDF" offset="100%" />
                      </linearGradient>
                      <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="48.57%" />
                        <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                      </linearGradient>
                      <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                        <stop stopColor="#4FD1C5" offset="0%" />
                        <stop stopColor="#81E6D9" offset="25.871%" />
                        <stop stopColor="#338CF5" offset="100%" />
                      </radialGradient>
                      <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                      <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                      <g fillRule="nonzero">
                        <use fill="#000" xlinkHref="#hero-ill-d" />
                        <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex flex-col justify-center">
                  {/* Embedded YouTube video */}
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/1j3k4cowBs4?si=5e-7nYVhfcMcRvSJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>

              {/* Modal */}
            </div>

          </div>

        </div>
      </section>
    </section>
  );
}

export default HeroHome;
