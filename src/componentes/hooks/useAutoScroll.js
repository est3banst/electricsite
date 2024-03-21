import { useState, useEffect, useRef } from 'react'

function useAutoScroll(images, interval = 2500, ref) {
    const [currentIdx, setCurrentIndex] = useState(0);
    const heroRef = ref;

    useEffect(() => {
        const heroImgs = heroRef.current;
        if (!heroImgs) return;
    
        const imgWidth = heroImgs.clientWidth;
        const scrollPosition = currentIdx * imgWidth;
    
        heroImgs.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }, [currentIdx]);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIdx) => (prevIdx + 1) % images.length);
        }, interval);
    
        return () => clearInterval(intervalId);
      }, [currentIdx, images.length]);
      const goToPicture = (indexPict) => {
        setCurrentIndex(indexPict)
      };
  return {
    currentIdx,
    goToPicture
  }
}

export default useAutoScroll