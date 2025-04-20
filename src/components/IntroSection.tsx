import React from 'react'
import StaticImage from './StaticImage'

const IntroSection = ({para1,para2,srcOfImage,altText}) => {
  return (
    <div>
      {/* Introduction */}
      <section className="py-16 bg-dark-navy flex justify-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              
              {/* Text Content */}
              <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto lg:mx-0">
                <p className="text-white/90 leading-relaxed text-lg">
                {para1}
                </p>
                <p className="text-white/90 leading-relaxed text-lg mt-4">
                {para2}
                </p>
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <StaticImage
                  src={srcOfImage}
                  alt={altText}
                  className="h-[400px] w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default IntroSection
