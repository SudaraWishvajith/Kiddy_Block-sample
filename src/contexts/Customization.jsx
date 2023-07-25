import { createContext, useContext, useState } from "react";

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


const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {

    const [blockColor, setBlockColor] = useState(blockColors[0]);

    return <CustomizationContext.Provider value={{
        blockColor,
        setBlockColor,
        blockColors
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}