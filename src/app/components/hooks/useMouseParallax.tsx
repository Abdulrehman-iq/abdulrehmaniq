// // src/hooks/useMouseParallax.ts
// import { useState, useEffect } from 'react';

// export function useMouseParallax() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouse = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 20;
//       const y = (e.clientY / window.innerHeight - 0.5) * 20;
//       setPosition({ x, y });
//     };

//     window.addEventListener('mousemove', handleMouse);
//     return () => window.removeEventListener('mousemove', handleMouse);
//   }, []);

//   return position;
// }