import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  

  return (
    <>
      <Canvas shadows camera={{ position: [0,1.5,5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={3} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          <Scroll>
            <group>
                <Experience />
            </group>
           
          </Scroll>
         
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu setSection={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </>

  );
}

export default App;
