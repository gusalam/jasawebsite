import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { X } from 'lucide-react';

// Simple 3D Cat made of geometric shapes
const Cat = () => {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const tailRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Body bounce
    groupRef.current.position.y = Math.sin(time * 8) * 0.15;
    groupRef.current.rotation.z = Math.sin(time * 4) * 0.1;

    // Arms dancing
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time * 8) * 0.8 + 0.5;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = Math.sin(time * 8 + Math.PI) * 0.8 - 0.5;
    }

    // Legs stepping
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(time * 8) * 0.3;
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(time * 8 + Math.PI) * 0.3;
    }

    // Tail wagging
    if (tailRef.current) {
      tailRef.current.rotation.z = Math.sin(time * 6) * 0.5;
    }
  });

  const catColor = '#ff9f43';
  const darkColor = '#e17055';

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.8}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.5, 0.8, 8, 16]} />
        <meshStandardMaterial color={catColor} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color={catColor} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.25, 1.5, 0]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.15, 0.3, 4]} />
        <meshStandardMaterial color={catColor} />
      </mesh>
      <mesh position={[0.25, 1.5, 0]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.15, 0.3, 4]} />
        <meshStandardMaterial color={catColor} />
      </mesh>

      {/* Inner Ears */}
      <mesh position={[-0.25, 1.45, 0.08]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.08, 0.2, 4]} />
        <meshStandardMaterial color="#ffb8b8" />
      </mesh>
      <mesh position={[0.25, 1.45, 0.08]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.08, 0.2, 4]} />
        <meshStandardMaterial color="#ffb8b8" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 1.15, 0.38]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#2d3436" />
      </mesh>
      <mesh position={[0.15, 1.15, 0.38]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#2d3436" />
      </mesh>

      {/* Eye highlights */}
      <mesh position={[-0.12, 1.18, 0.45]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.18, 1.18, 0.45]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 1.0, 0.42]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial color="#ff7675" />
      </mesh>

      {/* Mouth */}
      <mesh position={[0, 0.92, 0.4]}>
        <boxGeometry args={[0.15, 0.02, 0.02]} />
        <meshStandardMaterial color="#2d3436" />
      </mesh>

      {/* Left Arm */}
      <mesh ref={leftArmRef} position={[-0.55, 0.2, 0]}>
        <capsuleGeometry args={[0.12, 0.5, 4, 8]} />
        <meshStandardMaterial color={catColor} />
      </mesh>

      {/* Right Arm */}
      <mesh ref={rightArmRef} position={[0.55, 0.2, 0]}>
        <capsuleGeometry args={[0.12, 0.5, 4, 8]} />
        <meshStandardMaterial color={catColor} />
      </mesh>

      {/* Left Leg */}
      <mesh ref={leftLegRef} position={[-0.25, -0.8, 0]}>
        <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
        <meshStandardMaterial color={catColor} />
      </mesh>

      {/* Right Leg */}
      <mesh ref={rightLegRef} position={[0.25, -0.8, 0]}>
        <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
        <meshStandardMaterial color={catColor} />
      </mesh>

      {/* Tail */}
      <mesh ref={tailRef} position={[0, -0.3, -0.5]} rotation={[0.5, 0, 0]}>
        <capsuleGeometry args={[0.08, 0.6, 4, 8]} />
        <meshStandardMaterial color={darkColor} />
      </mesh>

      {/* Belly */}
      <mesh position={[0, -0.1, 0.35]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ffeaa7" />
      </mesh>
    </group>
  );
};

const DancingCat = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-24 right-6 z-50"
      style={{ width: '180px', height: '220px' }}
    >
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
        aria-label="Close dancing cat"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Cat Canvas */}
      <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20">
        <Canvas
          camera={{ position: [0, 0.5, 4], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-3, 2, 2]} intensity={0.5} color="#ff9f43" />
          <Cat />
        </Canvas>
      </div>

      {/* Label */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-medium whitespace-nowrap">
        🎵 Kucing Joget
      </div>
    </div>
  );
};

export default DancingCat;
