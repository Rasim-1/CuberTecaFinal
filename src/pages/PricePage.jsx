// import React, { useRef, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import * as THREE from 'three';

// const ManInRocks = () => {
//   const modelRef = useRef();

//   // Обновляем положение модели на основе прокрутки
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY; // Текущая позиция скролла
//       if (modelRef.current) {
//         modelRef.current.position.y = -scrollY * 0.01; // Двигаем модель вниз
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <Suspense fallback={null}>
//       <Model ref={modelRef} />
//     </Suspense>
//   );
// };

// const Model = React.forwardRef((props, ref) => {
//   const { scene } = useGLTF('/3d.webp'); // Убедитесь, что файл доступен по пути public/man_in_rocks.glb
//   return <primitive object={scene} ref={ref} />;
// });

// const Price = () => {
//   return (
//     <div style={{ height: '300vh', overflow: 'auto' }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <ManInRocks />
//         <OrbitControls enableZoom={false} />
//       </Canvas>
//     </div>
//   );
// };

// export default Price;
import React from 'react'

const PricePage = () => {
  return (
    <div>PricePage</div>
  )
}

export default PricePage