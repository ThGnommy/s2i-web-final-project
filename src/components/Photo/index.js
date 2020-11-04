import React, { useMemo, useState } from "react";
import { SinglePhoto, PhotoContainer, TextPhoto } from "../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
// import { StoreContext } from "../../StoreContext";
export const Photo = ({ image, photographer }) => {
  const [hover, setHover] = useState(false);

  const isHover = () => {
    setHover(true);
  };

  const isNotHover = () => {
    setHover(false);
  };

  useMemo(() => isHover, []);
  useMemo(() => isNotHover, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ scale: 0, transition: { duration: 0.5 } }}
        >
          <SinglePhoto
            onMouseEnter={isHover}
            onMouseLeave={isNotHover}
            backgroundImage={`url(${image})`}
          >
            {hover && (
              <>
                <PhotoContainer
                  as={motion.div}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                  exit={{ width: 0, opacity: 0 }}
                >
                  <TextPhoto>{photographer}</TextPhoto>
                  <TextPhoto>Icon</TextPhoto>
                </PhotoContainer>
              </>
            )}
          </SinglePhoto>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
