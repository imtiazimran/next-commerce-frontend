import { useEffect } from 'react';
interface MouseEventWithClient extends MouseEvent {
  clientX: number;
  clientY: number;
}



const MouseTrail = ({ dotSize = 10, color = 'rgba(0, 0, 0, 0.5)', fadeDuration = 300 }) => {
  useEffect(() => {
    const trailContainer = document.createElement('div');
    trailContainer.style.position = 'fixed';
    trailContainer.style.top = '0';
    trailContainer.style.left = '0';
    trailContainer.style.pointerEvents = 'none';
    trailContainer.style.zIndex = '9999';
    document.body.appendChild(trailContainer);

 

  
    const handleMouseMove = (event: MouseEventWithClient) => {
      const trailDot = document.createElement('div');
      trailDot.style.position = 'absolute';
      trailDot.style.width = `${dotSize}px`;
      trailDot.style.height = `${dotSize}px`;
      trailDot.style.borderRadius = '50%';
      trailDot.style.backgroundColor = color;
      trailDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      trailContainer.appendChild(trailDot);

      setTimeout(() => {
      trailDot.remove();
      }, fadeDuration);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trailContainer.remove();
    };
  }, [dotSize, color, fadeDuration]);

  return null;
};

export default MouseTrail;
