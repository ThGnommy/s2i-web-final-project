import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { Switch, SwitchContainer, SwitchText } from "./../../styled-component";
import { ThemeContext } from "styled-components";

export const SarchSwitch = () => {
  const { checked, setChecked } = useContext(StoreContext);
  const themeContext = useContext(ThemeContext);

  const handleSwitch = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <SwitchContainer>
        <SwitchText
          TextColor={checked ? themeContext.textDark : themeContext.textLight}
        >
          Photo
        </SwitchText>
        <Switch>
          <label>
            <input onChange={handleSwitch} type='checkbox' />
            <span></span>
          </label>
        </Switch>
        <SwitchText
          TextColor={!checked ? themeContext.textDark : themeContext.textLight}
        >
          Video
        </SwitchText>
      </SwitchContainer>
    </>
  );
};
