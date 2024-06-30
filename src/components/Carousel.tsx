import { useState, useEffect, type HTMLProps, type ReactNode } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export interface PropsCarousel extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  numImages: number;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel = ({
  numImages,
  autoSlide = false,
  autoSlideInterval = 3000,
  children,
}: PropsCarousel) => {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? numImages - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === numImages - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) {
      return;
    }

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative mb-10 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <IconChevronLeft />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <IconChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {[...Array<number>(numImages)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full bg-white transition-all ${curr === i ? 'p-0.5' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
