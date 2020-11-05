import React, { useState, useContext } from "react";
import { SinglePhoto, PhotoContainer, TextPhoto } from "../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const FavoritePhoto = ({ image, photographer, currentPhoto }) => {
  const [hover, setHover] = useState(false);

  const { setFavorites, favorites } = useContext(StoreContext);

  const isHover = () => {
    setHover(true);
  };

  const isNotHover = () => {
    setHover(false);
  };

  const handleDeletePhoto = (photo) => {
    JSON.stringify(favorites.filter((o) => o.id !== photo.id));
    setFavorites(favorites.filter((o) => o.id !== photo.id));
  };

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
                  <FontAwesomeIcon
                    icon={faDownload}
                    color='green'
                    style={{ marginLeft: "0.5rem" }}
                  />
                  <TextPhoto>{photographer}</TextPhoto>
                  <FontAwesomeIcon
                    icon={faTimes}
                    color='red'
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => handleDeletePhoto(currentPhoto)}
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
