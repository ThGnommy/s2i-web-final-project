import React, { useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { Switch, SwitchContainer, SwitchText } from "./../../styled-component";
import { ThemeContext } from "styled-components";

export const SearchSwitch = () => {
  const { searchSwitch, setSearchSwitch, setQuery, setInput } = useContext(
    StoreContext
  );
  const themeContext = useContext(ThemeContext);

  const handleSwitch = (e) => {
    // Prevent fetching onclick
    // setQuery("");
    // setInput("");
    setSearchSwitch(e.target.checked);
  };

  useEffect(() => {
    setSearchSwitch(false);
  }, [setSearchSwitch]);

  return (
    <>
      <SwitchContainer>
        <SwitchText
          TextColor={
            searchSwitch ? themeContext.textDark : themeContext.textLight
          }
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
          TextColor={
            !searchSwitch ? themeContext.textDark : themeContext.textLight
          }
        >
          Video
        </SwitchText>
      </SwitchContainer>
    </>
  );
};
