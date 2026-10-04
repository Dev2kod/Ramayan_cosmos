import { EffectComposer, Bloom, Vignette, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { BlendFunction, KernelSize } from 'postprocessing';
import * as THREE from 'three';
import { useMemo } from 'react';

export function Effects({ intensity = 1 }: { intensity?: number }) {
  const offset = useMemo(() => new THREE.Vector2(0.0005, 0.0008), []);
  return (
    <EffectComposer multisampling={0} enableNormalPass={false}>
      <Bloom
        intensity={1.15 * intensity}
        luminanceThreshold={0.22}
        luminanceSmoothing={0.3}
        kernelSize={KernelSize.LARGE}
        mipmapBlur
      />
      <ChromaticAberration offset={offset} radialModulation modulationOffset={0.4} />
      <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} opacity={0.22} />
      <Vignette eskil={false} offset={0.22} darkness={0.82} />
    </EffectComposer>
  );
}
