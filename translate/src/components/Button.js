import React from "react";
import LanguageContext from "../contexts/LanguajeContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  render() {
    return (
      <ColorContext>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) =>
                language === "english" ? "Submit" : "Voorleggen"
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext>
    );
  }
}

export default Button;
