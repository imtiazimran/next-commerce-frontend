'use client';

import { useEffect } from "react";

interface MouseEventWithCoords extends MouseEvent {
  clientX: number;
  clientY: number;
}

const MouseTrail = ({ length = 20, color = 'rgba(0, 0, 255, 0.5)', speed = 0.2 }) => {
  useEffect(() => {
    const trailElements: HTMLElement[] = [];
    const positions: { x: number; y: number }[] = Array.from({ length }, () => ({ x: 0, y: 0 }));

    // Create the trail elements
    for (let i = 0; i < length; i++) {
      const trail = document.createElement('div');
      trail.style.position = 'absolute';
      trail.style.width = `${10 + (length - i) * 2}px`; // Larger for the first elements
      trail.style.height = `${10 + (length - i) * 2}px`;
      trail.style.borderRadius = '50%';
      trail.style.backgroundColor = color;
      trail.style.opacity = `${1 - i / length}`; // Gradual fade
      trail.style.pointerEvents = 'none'; // Prevent interaction
      trail.style.transition = `transform ${speed}s ease-out`; // Smooth movement
      document.body.appendChild(trail);

      trailElements.push(trail);
    }

    // Handle mouse movement
    const handleMouseMove = (e: MouseEventWithCoords) => {
      positions.push({ x: e.clientX, y: e.clientY });
      positions.shift();

      trailElements.forEach((el, i) => {
        const pos = positions[i];
        el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });
    };

    // Attach the event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trailElements.forEach((el) => {
        document.body.removeChild(el);
      });
    };
  }, [length, color, speed]);

  return null; // No visible JSX, since this works directly with the DOM
};

export default MouseTrail;
