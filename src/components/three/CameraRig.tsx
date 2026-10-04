import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export interface FlyTarget {
  /** Where the camera looks. */
  look: [number, number, number];
  /** Where the camera sits. Omit to keep the current direction and use `dist`. */
  eye?: [number, number, number];
  dist?: number;
  /** Seconds. */
  duration?: number;
}

/**
 * Orbit controls plus a scripted fly-to. While a fly is in progress the
 * controls are disabled; the moment it lands, control returns to the user.
 */
export function CameraRig({
  target,
  minDistance = 3,
  maxDistance = 320,
  autoRotate = false,
  onArrive,
}: {
  target: FlyTarget | null;
  minDistance?: number;
  maxDistance?: number;
  autoRotate?: boolean;
  onArrive?: () => void;
}) {
  const controls = useRef<any>(null);
  const { camera } = useThree();

  const anim = useRef<{
    from: THREE.Vector3;
    to: THREE.Vector3;
    fromLook: THREE.Vector3;
    toLook: THREE.Vector3;
    t: number;
    dur: number;
  } | null>(null);

  useEffect(() => {
    if (!target || !controls.current) return;
    const look = new THREE.Vector3(...target.look);
    let eye: THREE.Vector3;
    if (target.eye) {
      eye = new THREE.Vector3(...target.eye);
    } else {
      const dir = new THREE.Vector3().subVectors(camera.position, controls.current.target);
      if (dir.lengthSq() < 1e-6) dir.set(0, 0, 1);
      dir.normalize().multiplyScalar(target.dist ?? 24);
      eye = look.clone().add(dir);
    }
    anim.current = {
      from: camera.position.clone(),
      to: eye,
      fromLook: controls.current.target.clone(),
      toLook: look,
      t: 0,
      dur: target.duration ?? 1.5,
    };
  }, [target, camera]);

  useFrame((_, dt) => {
    const c = controls.current;
    if (!c) return;
    const a = anim.current;
    if (a) {
      a.t = Math.min(1, a.t + dt / a.dur);
      const e = easeInOutCubic(a.t);
      camera.position.lerpVectors(a.from, a.to, e);
      c.target.lerpVectors(a.fromLook, a.toLook, e);
      c.enabled = false;
      c.update();
      if (a.t >= 1) {
        anim.current = null;
        c.enabled = true;
        onArrive?.();
      }
    } else {
      c.update();
    }
  });

  return (
    <OrbitControls
      ref={controls}
      makeDefault
      enablePan
      enableDamping
      dampingFactor={0.07}
      rotateSpeed={0.55}
      zoomSpeed={0.9}
      panSpeed={0.7}
      minDistance={minDistance}
      maxDistance={maxDistance}
      autoRotate={autoRotate}
      autoRotateSpeed={0.22}
    />
  );
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
