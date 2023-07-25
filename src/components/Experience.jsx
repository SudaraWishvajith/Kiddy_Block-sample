import { OrbitControls } from "@react-three/drei";
import { Blck } from "./Blck";
import { DirectionalLightHelper, GridHelper } from "three";

export const Experience = () => {
  return (
    <>
    {/* <OrbitControls /> */}
    <directionalLight position={[-5,5,5]} />
    <ambientLight intensity={1}/>
        <Blck scale={0.02} position-x={0.8} position-y={0}/>
    </>
  );
};
