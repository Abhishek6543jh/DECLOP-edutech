import React from 'https://cdn.skypack.dev/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';


function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Trusted by 1000's of declopguys across india</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">the above backend product's belongs to respective 
</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-3 grid-cols-4 md:grid-cols-5">
          <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <FontAwesomeIcon icon={fab.faAmazon} size="3x" />
</div>

<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <FontAwesomeIcon icon={fab.faGoogle} size="3x" />
</div>

<div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
  <FontAwesomeIcon icon={fab.faMicrosoft} size="3x" />
</div>

<div className="flex items-center justify-center py-2 col-span-2 md:col-auto" >
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 3 21 C 1.34375 21 0 22.425781 0 24.082031 C 0 25.738281 1.34375 27 3 27 L 6 27 C 7.65625 27 9 25.660156 9 24 C 9 22.34375 7.65625 21 6 21 Z M 10 21 L 10 27 L 11 27 L 11 22 L 14.972656 22 C 15.507813 22 16 22.492188 16 23.03125 C 16 23.566406 15.507813 24 14.972656 24 L 12 24 L 15.605469 27 L 17 27 L 14.519531 25 L 15.046875 25 C 16.167969 25 17 24.148438 17 23.03125 C 17 21.910156 16.167969 21 15.046875 21 Z M 22 21 C 21.730469 21 21.488281 21.136719 21.34375 21.363281 L 18 27 L 19.082031 27 L 22 22 L 23.761719 25 L 21 25 L 22 26 L 24.347656 26 L 24.9375 27 L 26 27 L 22.640625 21.355469 C 22.5 21.132813 22.261719 21 22 21 Z M 29 21 C 27.34375 21 26 22.34375 26 24 C 26 25.65625 27.34375 27 29 27 L 33 27 L 34 26 L 28.980469 26 C 27.886719 26 27 25.105469 27 24 C 27 22.898438 27.886719 22 28.980469 22 L 33 22 L 34 21 Z M 35 21 L 35 26.425781 C 35 26.574219 35.058594 26.714844 35.167969 26.828125 C 35.277344 26.9375 35.429688 27 35.589844 27 L 40 27 L 41 26 L 36 26 L 36 21 Z M 45 21 C 43.34375 21 42 22.34375 42 24 C 42 25.65625 43.34375 27 45 27 L 49 27 L 50 26 L 44.980469 26 C 44.058594 26 43.289063 25.363281 43.070313 24.5 L 49 24.5 L 50 23.5 L 43.070313 23.5 C 43.292969 22.640625 44.058594 22 44.980469 22 L 49 22 L 50 21 Z M 2.980469 22 L 6.019531 22 C 7.113281 22 8 22.898438 8 24 C 8 25.105469 7.113281 26 6.019531 26 L 2.980469 26 C 1.886719 26 1 25.105469 1 24 C 1 22.898438 1.886719 22 2.980469 22 Z"></path>
</svg>
</div>

</div>


          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                
                  <img className="relative rounded-full" src="declop-img3.jpg" width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Darya Finger</cite>
                <div className="text-gray-600">
                  <span>CEO & Co-Founder</span> <a className="text-blue-600 hover:underline" href="#0">@Dropbox</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;