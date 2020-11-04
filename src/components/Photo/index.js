import React, { useMemo, useState, useContext } from "react";
import { SinglePhoto, PhotoContainer, TextPhoto } from "../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
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
          exit={{ scale: 0 }}
        >
          <SinglePhoto
            as={motion.div}
            onMouseEnter={isHover}
            onMouseLeave={isNotHover}
            backgroundImage={`url(${image})`}
          >
            {hover && (
              <>
                <PhotoContainer
                  as={motion.div}
                  initial={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  animate={{ width: "100%", opacity: 0.7 }}
                  exit={{ width: 0, opacity: 0 }}
                >
                  <TextPhoto>{photographer}</TextPhoto>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    color='white'
                    style={{ marginRight: "0.5rem" }}
                  />
                </PhotoContainer>
              </>
            )}
          </SinglePhoto>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
