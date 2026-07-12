
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
    }, 5000);

    return () => clearInterval(autoplayInterval);
  }, [api]);

  return (
    <div className="w-full py-8">
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
                  <div className="mx-auto relative flex h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-lg sm:h-80 md:h-96 lg:h-[420px]">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="h-full w-full max-w-full max-h-full object-contain object-center transition-transform duration-500 hover:scale-105"
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
