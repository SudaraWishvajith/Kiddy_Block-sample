import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  const blockColors = [
    {
      color: "#E42404",
      name: "red",
    },
    {
      color: "#683434",
      name: "brown",
    },
    {
      color: "#1a5e1a",
      name: "green",
    },
    {
      color: "#659994",
      name: "blue",
    },
    {
      color: "#896599",
      name: "mauve",
    },
    {
      color: "#ffa500",
      name: "orange",
    },
    {
      color: "#59555b",
      name: "grey",
    },
    {
      color: "#222222",
      name: "black",
    },
    {
      color: "#ececec",
      name: "white",
    },
  ];
  const [blockColor, setBlockColor] = useState(blockColors[0]);
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <CustomizationProvider>
        <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls pages={2} damping={0.1}>
            <ScrollManager section={section} setSection={setSection} />
            {/* <Scroll> */}
            <group>
              <Experience section={section} blockColors={blockColors} blockColor={blockColor} menuOpened={menuOpened} />
            </group>
            {/* </Scroll> */}
            <Scroll>

            </Scroll>

            <Scroll html>
              <Interface blockColors={blockColors} blockColor={blockColor} setBlockColor={setBlockColor} />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu setSection={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      </CustomizationProvider>
    </>

  );
}

export default App;
