import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext";
import { Switch, SwitchContainer } from "./../../styled-component";

export const SarchSwitch = () => {
  const { checked, setChecked } = useContext(StoreContext);

  const handleSwitch = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <SwitchContainer>
        <p>Photo</p>
        <Switch>
          <label>
            <input onChange={handleSwitch} type='checkbox' />
            <span></span>
          </label>
        </Switch>
        <p>Video</p>
      </SwitchContainer>
    </>
  );
};
