import React, { useMemo, useState } from "react";
import { SinglePhoto } from "../../styled-component";
// import { StoreContext } from "../../StoreContext";
export const Photo = ({ image, photographer }) => {
  const [hover, setHover] = useState(false);

  const isHover = () => {
    setHover(true);
  };

  const isNotHover = () => {
    setHover(false);
  };

  useMemo(() => isHover, [hover]);
  useMemo(() => isNotHover, [hover]);

  return (
    <>
      <SinglePhoto
        onMouseEnter={isHover}
        onMouseLeave={isNotHover}
        backgroundImage={`url(${image})`}
      >
        {hover && (
          <>
            <p>{photographer}</p>
          </>
        )}
      </SinglePhoto>
    </>
  );
};
