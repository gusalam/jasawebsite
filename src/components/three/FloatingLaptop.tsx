import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RoundedBox } from '@react-three/drei';

interface FloatingLaptopProps {
  isMobile?: boolean;
}

const FloatingLaptop = ({ isMobile = false }: FloatingLaptopProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  // Create screen gradient texture - lower resolution on mobile
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = isMobile ? 256 : 512;
    canvas.height = isMobile ? 160 : 320;
    const ctx = canvas.getContext('2d')!;

    const scale = isMobile ? 0.5 : 1;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1e3a5f');
    gradient.addColorStop(0.5, '#2d4a6f');
    gradient.addColorStop(1, '#1e3a5f');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add header bar
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(0, 0, canvas.width, 40 * scale);
    
    // Title text
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${18 * scale}px Arial`;
    ctx.fillText('YOUR WEBSITE', 20 * scale, 28 * scale);

    // Navigation tabs - simplified on mobile
    if (!isMobile) {
      const tabs = ['E-Commerce', 'Dashboard', 'Company Profile'];
      tabs.forEach((tab, i) => {
        ctx.fillStyle = i === 0 ? '#ff8c00' : '#4a90a4';
        ctx.fillRect(20 + i * 140, 55, 120, 30);
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.fillText(tab, 35 + i * 140, 75);
      });

      // Content boxes
      ctx.fillStyle = '#2a5a7f';
      ctx.fillRect(20, 100, 200, 80);
      ctx.fillRect(240, 100, 250, 80);

      // Lines for text
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = '#4a90a4';
        ctx.fillRect(30, 200 + i * 20, 180 + Math.random() * 100, 8);
      }
    } else {
      // Simplified content for mobile
      ctx.fillStyle = '#2a5a7f';
      ctx.fillRect(10, 50, canvas.width - 20, 40);
      ctx.fillRect(10, 100, canvas.width - 20, 40);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [isMobile]);

  // Floating animation with mouse parallax - simplified on mobile
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Base floating animation
    const baseY = Math.sin(time * 0.5) * 0.3 - 0.5;
    const baseRotY = Math.sin(time * 0.3) * 0.1 - 0.3;
    
    if (isMobile) {
      // Simpler animation on mobile - no mouse tracking
      groupRef.current.position.y = baseY;
      groupRef.current.rotation.y = baseRotY;
    } else {
      const baseRotX = Math.sin(time * 0.4) * 0.05;

      // Mouse parallax effect - smooth interpolation
      const targetX = -2.5 + mouse.x * 0.3;
      const targetY = baseY + mouse.y * 0.2;
      const targetRotY = baseRotY + mouse.x * 0.15;
      const targetRotX = baseRotX - mouse.y * 0.1;

      // Smooth lerping for natural movement
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[-2.5, 0, 0]} scale={isMobile ? 0.7 : 0.9}>
      {/* Laptop base */}
      <RoundedBox
        args={[4, 0.15, 2.5]}
        radius={0.05}
        position={[0, -1.3, 0.3]}
        rotation={[-0.1, 0, 0]}
      >
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={isMobile ? 0.5 : 0.8}
          roughness={isMobile ? 0.4 : 0.2}
        />
      </RoundedBox>

      {/* Keyboard area - skip on mobile */}
      {!isMobile && (
        <RoundedBox
          args={[3.6, 0.02, 2]}
          radius={0.02}
          position={[0, -1.2, 0.3]}
          rotation={[-0.1, 0, 0]}
        >
          <meshStandardMaterial
            color="#0f0f1a"
            metalness={0.5}
            roughness={0.5}
          />
        </RoundedBox>
      )}

      {/* Screen bezel */}
      <RoundedBox
        args={[4.2, 2.8, 0.1]}
        radius={0.05}
        position={[0, 0.2, -0.8]}
        rotation={[0.2, 0, 0]}
      >
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={isMobile ? 0.5 : 0.8}
          roughness={isMobile ? 0.4 : 0.2}
        />
      </RoundedBox>

      {/* Screen display */}
      <mesh
        ref={screenRef}
        position={[0, 0.2, -0.74]}
        rotation={[0.2, 0, 0]}
      >
        <planeGeometry args={[3.8, 2.5]} />
        <meshBasicMaterial map={screenTexture} />
      </mesh>

      {/* Screen glow - reduced on mobile */}
      <pointLight
        position={[0, 0.2, 0]}
        intensity={isMobile ? 0.2 : 0.5}
        color="#3b82f6"
        distance={isMobile ? 2 : 3}
      />
    </group>
  );
};

export default FloatingLaptop;
