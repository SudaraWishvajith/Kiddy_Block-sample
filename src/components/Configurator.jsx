// import { useCustomization } from "../contexts/Customization";
import "../Configurator.css";
import { useCustomization } from "../contexts/Customization";

const Configurator = (props) => {
    const{ blockColors, blockColor, setBlockColor } = props;
  

  return (
    <div className="configurator">
        <div className="configurator__section">
        <div className="configurator__section__title">Block color</div>
        <div className="configurator__section__values">
          {blockColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === blockColor.color ? "item--active" : ""
              }`}
              onClick={() => setBlockColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Configurator;