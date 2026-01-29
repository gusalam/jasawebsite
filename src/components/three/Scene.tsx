import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Particles from './Particles';
import FloatingLaptop from './FloatingLaptop';
import FloatingPhone from './FloatingPhone';
import CityLights from './CityLights';

const Scene = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: !isMobile, // Disable antialiasing on mobile
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance"
        }}
        dpr={isMobile ? 1 : [1, 2]} // Lower resolution on mobile
        frameloop={isMobile ? "demand" : "always"} // Only render on demand on mobile
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.3} />
          
          {/* Main directional light */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            color="#4da6ff"
          />
          
          {/* Accent lights - reduced on mobile */}
          <pointLight position={[-5, 3, 2]} intensity={isMobile ? 1 : 1.5} color="#a855f7" />
          {!isMobile && <pointLight position={[5, -2, 3]} intensity={1} color="#ff8c00" />}
          {!isMobile && <pointLight position={[0, 5, 0]} intensity={0.8} color="#3b82f6" />}

          {/* 3D Objects */}
          <FloatingLaptop isMobile={isMobile} />
          <FloatingPhone isMobile={isMobile} />
          <Particles isMobile={isMobile} />
          <CityLights isMobile={isMobile} />

          {/* Post-processing effects - simplified on mobile */}
          {!isMobile && (
            <EffectComposer>
              <Bloom
                intensity={1.5}
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                mipmapBlur
              />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
