import { OrbitControls, ScrollControls } from '@react-three/drei'
import { World } from './World'
import { EffectComposer, Bloom, ToneMapping, Vignette, ChromaticAberration} from '@react-three/postprocessing'
import { BlendFunction, ToneMappingMode} from 'postprocessing'
import Overlay from '../Overlay'

export const Experience = () => {
  
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  return(
    <>
    {isMobile ? null:  <OrbitControls enableZoom={false} />}
    <ambientLight intensity={5} />

    <ScrollControls pages={4} damping={.05}> 
      {isMobile ? <Overlay /> : null}
      <World/>
    </ScrollControls>
    
    <EffectComposer>
      <Bloom 
        intensity={1} 
        luminanceThreshold={0}
        luminanceSmoothing={0.025}
        blendFunction={BlendFunction.ADD}
      />
      <Vignette 
        offset={0.5}
        darkness={0.5}
        blendFunction={BlendFunction.MULTIPLY}
      />
      <ChromaticAberration 
        offset={[0.004, 0.004]}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
    </>
  )
}