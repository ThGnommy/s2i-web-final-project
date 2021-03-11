import React, { useEffect } from "react";
import { useContext } from "react";
import { Switch, SwitchContainer, SwitchText } from "./../../styled-component";
import { ThemeContext } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSwitchType } from "../../redux/actions/switchSelectorAction";
import { setCurrentPage } from "../../redux/actions/mediaAction";

export const SearchSwitch = () => {
  const themeContext = useContext(ThemeContext);

  const { switchType } = useSelector((state) => state.switchSelector);
  const dispatch = useDispatch();

  const handleSwitch = (e) => {
    dispatch(setSwitchType(e.target.checked));
    dispatch(setCurrentPage(1));
  };

  useEffect(() => {
    dispatch(setSwitchType(false));
  }, [dispatch]);

  return (
    <>
      <SwitchContainer>
        <SwitchText
          TextColor={
            switchType ? themeContext.textDark : themeContext.textLight
          }
        >
          Photo
        </SwitchText>
        <Switch>
          <label>
            <input onChange={handleSwitch} type="checkbox" />
            <span></span>
          </label>
        </Switch>
        <SwitchText
          TextColor={
            !switchType ? themeContext.textDark : themeContext.textLight
          }
        >
          Video
        </SwitchText>
      </SwitchContainer>
    </>
  );
};
