import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CityLightsProps {
  isMobile?: boolean;
}

const CityLights = ({ isMobile = false }: CityLightsProps) => {
  const meshRef = useRef<THREE.Points>(null);
  const count = isMobile ? 150 : 500; // Fewer lights on mobile

  // Generate city light positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color('#3b82f6'),
      new THREE.Color('#ff8c00'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#a855f7'),
    ];

    for (let i = 0; i < count; i++) {
      // Spread lights across the background like a city skyline
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.8) * 8;
      positions[i * 3 + 2] = -15 - Math.random() * 20;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, [count]);

  // Subtle twinkle animation - disabled on mobile
  useFrame((state) => {
    if (!meshRef.current || isMobile) return;
    const time = state.clock.getElapsedTime();
    
    // Subtle horizontal drift
    meshRef.current.position.x = Math.sin(time * 0.05) * 0.5;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.2 : 0.15}
        vertexColors
        transparent
        opacity={isMobile ? 0.5 : 0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default CityLights;
