"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Floating Particles ─────────────────────────────────────── */
function ParticleField({ count = 800 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const [positions, sizes, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const col = new Float32Array(count * 3);

    const green = new THREE.Color("#9fe870");
    const dimGreen = new THREE.Color("#3a5a28");
    const white = new THREE.Color("#e4e8e0");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      siz[i] = Math.random() * 3 + 0.5;

      const colorChoice = Math.random();
      const c = colorChoice < 0.3 ? green : colorChoice < 0.6 ? dimGreen : white;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, siz, col];
  }, [count]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    
    mesh.current.rotation.y = time * 0.02 + mousePos.current.x * 0.1;
    mesh.current.rotation.x = mousePos.current.y * 0.05;

    const posArray = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      posArray[idx + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.002;
      posArray[idx] += Math.cos(time * 0.2 + i * 0.05) * 0.001;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const geometryRef = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    if (!geometryRef.current) return;
    geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometryRef.current.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometryRef.current.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  }, [positions, sizes, colors]);

  return (
    <points ref={mesh}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Glowing Ring ─────────────────────────────────────── */
function GlowRing({ radius = 3, tube = 0.02, speed = 0.5 }: { radius?: number; tube?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * speed) * 0.1;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshBasicMaterial color="#9fe870" transparent opacity={0.3} />
    </mesh>
  );
}

/* ─── Floating Gamepad (geometric primitives) ──────────── */
function FloatingGamepad() {
  const group = useRef<THREE.Group>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    
    group.current.position.y = Math.sin(t * 0.8) * 0.3;
    group.current.rotation.y = t * 0.15 + mousePos.current.x * 0.3;
    group.current.rotation.x = Math.sin(t * 0.5) * 0.05 + mousePos.current.y * 0.1;
    group.current.rotation.z = Math.sin(t * 0.3) * 0.03;
  });

  return (
    <group ref={group} scale={0.9} position={[0, 0, 0]}>
      {/* Controller body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.4, 0.6, 1.0]} />
        <meshStandardMaterial
          color="#1a1a2e"
          roughness={0.3}
          metalness={0.7}
          emissive="#0a0a15"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Left grip */}
      <mesh position={[-1.2, -0.4, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.25, 0.6, 8, 16]} />
        <meshStandardMaterial color="#12121e" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Right grip */}
      <mesh position={[1.2, -0.4, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.25, 0.6, 8, 16]} />
        <meshStandardMaterial color="#12121e" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* D-Pad (left side) */}
      <mesh position={[-0.6, 0.05, -0.45]}>
        <boxGeometry args={[0.35, 0.08, 0.12]} />
        <meshStandardMaterial color="#2a2a3e" roughness={0.5} metalness={0.5} />
      </mesh>
      <mesh position={[-0.6, 0.05, -0.45]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.35, 0.08, 0.12]} />
        <meshStandardMaterial color="#2a2a3e" roughness={0.5} metalness={0.5} />
      </mesh>

      {/* Action buttons (right side) — glowing green */}
      {[
        [0.5, 0.08, -0.55],
        [0.7, 0.08, -0.35],
        [0.5, 0.08, -0.15],
        [0.3, 0.08, -0.35],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color="#9fe870"
            emissive="#9fe870"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>
      ))}

      {/* Left joystick */}
      <mesh position={[-0.6, 0.15, 0.1]}>
        <cylinderGeometry args={[0.12, 0.12, 0.15, 16]} />
        <meshStandardMaterial color="#3a3a4e" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Right joystick */}
      <mesh position={[0.3, 0.15, 0.1]}>
        <cylinderGeometry args={[0.12, 0.12, 0.15, 16]} />
        <meshStandardMaterial color="#3a3a4e" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Center logo area — glowing */}
      <mesh position={[0, 0.05, -0.35]}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 16]} />
        <meshStandardMaterial
          color="#9fe870"
          emissive="#9fe870"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.4}
        />
      </mesh>
    </group>
  );
}

/* ─── Ambient Lighting Setup ─────────────────────────────── */
function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.15} color="#e4e8e0" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#9fe870" distance={20} decay={2} />
      <pointLight position={[-5, 3, -5]} intensity={0.4} color="#38c8ff" distance={15} decay={2} />
      <pointLight position={[0, -3, 3]} intensity={0.3} color="#9fe870" distance={10} decay={2} />
    </>
  );
}

/* ─── Camera Controller (subtle auto-drift) ──────────────── */
function CameraController() {
  const { camera } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(() => {
    camera.position.x += (mousePos.current.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mousePos.current.y * 0.3 + 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Main Scene Export ──────────────────────────────────── */
export default function ThreeScene() {
  return (
    <div className="three-canvas-container">
      <Canvas
        camera={{ position: [0, 0.5, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <fog attach="fog" args={["#06060b", 8, 20]} />
        <SceneLighting />
        <CameraController />
        <ParticleField count={600} />
        <GlowRing radius={3.5} tube={0.015} speed={0.4} />
        <GlowRing radius={4.5} tube={0.01} speed={0.25} />
      </Canvas>
    </div>
  );
}
