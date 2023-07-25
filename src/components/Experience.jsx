import { Float, OrbitControls } from "@react-three/drei";
import { Blck } from "./Blck";
import { DirectionalLightHelper, GridHelper } from "three";

export const Experience = (props) => {
  const {section, blockColor, menuOpened} = props;
  return (
    <>
    {/* <OrbitControls /> */}
    <directionalLight position={[-5,5,5]} />
    <ambientLight intensity={1}/>
    <Float
    speed={3}
    // rotationIntensity={1}
    floatIntensity={0.5}
    floatingRange={[0]}
    >
      <Blck scale={0.02} position-x={0.8} position-y={0} section={section} blockColor={blockColor} />
    </Float>
        
    </>
  );
};
