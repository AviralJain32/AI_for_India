
import React, { useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Auto scroll every 5 seconds

    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <div className="w-full py-8 bg-deep-purple">
      <div className="container mx-auto px-4">
        <Carousel 
          opts={{
            align: 'center',
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <div className="mx-auto overflow-hidden rounded-lg shadow-lg h-96 relative">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
