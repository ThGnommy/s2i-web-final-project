import React, { useContext } from "react";
import { SinglePhoto, PhotoContainer, TextPhoto } from "../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const FavoritePhotoMobile = ({ image, photographer, currentPhoto }) => {
  const { setFavorites, favorites, mediaQuery } = useContext(StoreContext);

  const handleDeletePhoto = (photo) => {
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
          <SinglePhoto as={motion.div} backgroundImage={`url(${image})`}>
            <PhotoContainer
              as={motion.div}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
            >
              <FontAwesomeIcon
                icon={faDownload}
                color='green'
                style={{ marginLeft: "0.5rem" }}
                size={mediaQuery.isMobile ? "4x" : "2x"}
              />
              <TextPhoto>{photographer}</TextPhoto>
              <FontAwesomeIcon
                icon={faTimes}
                color='red'
                style={{ marginRight: "0.5rem" }}
                onClick={() => handleDeletePhoto(currentPhoto)}
                size={mediaQuery.isMobile ? "4x" : "2x"}
              />
            </PhotoContainer>
          </SinglePhoto>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
