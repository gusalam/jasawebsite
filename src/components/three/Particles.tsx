import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  isMobile?: boolean;
}

const Particles = ({ isMobile = false }: ParticlesProps) => {
  const meshRef = useRef<THREE.Points>(null);
  const count = isMobile ? 300 : 1500; // Much fewer particles on mobile

  // Generate random particle positions
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorPalette = [
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#a855f7'), // Purple
      new THREE.Color('#ff8c00'), // Orange
      new THREE.Color('#06b6d4'), // Cyan
    ];

    for (let i = 0; i < count; i++) {
      // Spread particles in a large sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 8 + Math.random() * 20;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 10;

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3 + 1;
    }

    return [positions, colors, sizes];
  }, [count]);

  // Animate particles - simplified on mobile
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.02;
    
    // Skip individual particle animation on mobile for performance
    if (isMobile) return;
    
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    // Animate individual particles (desktop only)
    const positionAttribute = meshRef.current.geometry.attributes.position;
    const array = positionAttribute.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3 + 1] += Math.sin(time + i * 0.1) * 0.002;
    }
    positionAttribute.needsUpdate = true;
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
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.12 : 0.08}
        vertexColors
        transparent
        opacity={isMobile ? 0.6 : 0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
