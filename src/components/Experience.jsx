import { Float, OrbitControls } from "@react-three/drei";
import { Blck } from "./Blck";
import { DirectionalLightHelper, GridHelper } from "three";
import { framerMotionConfig, framerMotionConfig2 } from "../config";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

export const Experience = (props) => {
  const {section, blockColor, menuOpened} = props;
  // cam position for section 1
  //const cameraPositionX1 = useMotionValue();

  const cameraPositionX = useMotionValue();
  const cameraPositionZ = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, bool ? -1 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraPositionZ, bool ? -5 : 5, {
      ...framerMotionConfig2,
    });
    animate(cameraLookAtX, bool ? 1 : 0, {
      ...framerMotionConfig,
    });
  }, [section]);
  console.log(section)

  const bool = section === 1
  // console.log(cameraPositionX)
  // useEffect(() => {
  //   animate(cameraPositionX, bool ? 1.5 : 0, {
  //     ...framerMotionConfig,
  //   });
  //   if(bool){

  //   }
  // },[section]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.position.z = cameraPositionZ.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });


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
