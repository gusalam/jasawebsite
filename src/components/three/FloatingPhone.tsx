import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RoundedBox } from '@react-three/drei';

interface FloatingPhoneProps {
  isMobile?: boolean;
}

const FloatingPhone = ({ isMobile = false }: FloatingPhoneProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Create phone screen texture - lower resolution on mobile
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = isMobile ? 128 : 256;
    canvas.height = isMobile ? 256 : 512;
    const ctx = canvas.getContext('2d')!;

    const scale = isMobile ? 0.5 : 1;

    // Dark gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1a1a3e');
    gradient.addColorStop(1, '#0f0f2a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Status bar
    ctx.fillStyle = '#2a2a4a';
    ctx.fillRect(0, 0, canvas.width, 30 * scale);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${20 * scale}px Arial`;
    ctx.fillText('YOUR APP', 70 * scale, 70 * scale);

    // App grid icons - fewer on mobile
    const iconColors = ['#3b82f6', '#a855f7', '#ff8c00', '#06b6d4', '#22c55e', '#ec4899'];
    const iconSize = 45 * scale;
    const startX = 25 * scale;
    const startY = 100 * scale;
    const gap = 60 * scale;

    const rows = isMobile ? 2 : 4;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < 3; col++) {
        const x = startX + col * gap;
        const y = startY + row * gap;
        ctx.fillStyle = iconColors[(row * 3 + col) % iconColors.length];
        ctx.beginPath();
        ctx.roundRect(x, y, iconSize, iconSize, 10 * scale);
        ctx.fill();
      }
    }

    // Bottom navigation
    ctx.fillStyle = '#2a2a4a';
    ctx.fillRect(0, canvas.height - 60 * scale, canvas.width, 60 * scale);
    
    // Nav icons - fewer on mobile
    const navCount = isMobile ? 3 : 4;
    for (let i = 0; i < navCount; i++) {
      ctx.fillStyle = i === 0 ? '#3b82f6' : '#666';
      ctx.beginPath();
      ctx.arc((40 + i * 55) * scale, canvas.height - 30 * scale, 12 * scale, 0, Math.PI * 2);
      ctx.fill();
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
    const baseY = Math.sin(time * 0.6 + 1) * 0.25 - 0.3;
    const baseRotY = Math.sin(time * 0.4 + 0.5) * 0.15 + 0.2;

    if (isMobile) {
      // Simpler animation on mobile - no mouse tracking
      groupRef.current.position.y = baseY;
      groupRef.current.rotation.y = baseRotY;
    } else {
      const baseRotZ = Math.sin(time * 0.3) * 0.05;

      // Mouse parallax effect - opposite direction for depth
      const targetX = 2.2 + mouse.x * 0.4;
      const targetY = baseY + mouse.y * 0.25;
      const targetRotY = baseRotY - mouse.x * 0.2;
      const targetRotZ = baseRotZ + mouse.x * 0.08;

      // Smooth lerping
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.04;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.z += (targetRotZ - groupRef.current.rotation.z) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[2.2, -0.3, 0.5]} scale={isMobile ? 0.65 : 0.85}>
      {/* Phone body */}
      <RoundedBox
        args={[1.3, 2.6, 0.12]}
        radius={0.15}
      >
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={isMobile ? 0.6 : 0.9}
          roughness={isMobile ? 0.3 : 0.1}
        />
      </RoundedBox>

      {/* Screen */}
      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[1.15, 2.4]} />
        <meshBasicMaterial map={screenTexture} />
      </mesh>

      {/* Camera notch - skip on mobile */}
      {!isMobile && (
        <mesh position={[0, 1.15, 0.07]}>
          <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      )}

      {/* Screen glow - reduced on mobile */}
      <pointLight
        position={[0, 0, 0.5]}
        intensity={isMobile ? 0.15 : 0.3}
        color="#a855f7"
        distance={isMobile ? 1.5 : 2}
      />
    </group>
  );
};

export default FloatingPhone;
