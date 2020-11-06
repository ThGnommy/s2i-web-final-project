import React, { useState, useContext } from "react";
import { SinglePhoto, PhotoContainer, TextPhoto } from "../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const FavoritePhotoDesktop = ({
  image,
  photographer,
  currentPhoto,
  downloadUrl,
}) => {
  const [hover, setHover] = useState(false);

  const { setFavorites, favorites, downloadImage } = useContext(StoreContext);

  const isHover = () => {
    setHover(true);
  };

  const isNotHover = () => {
    setHover(false);
  };

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
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                >
                  <FontAwesomeIcon
                    icon={faDownload}
                    color='green'
                    style={{ marginLeft: "0.5rem", cursor: "pointer" }}
                    size='1x'
                    onClick={() => downloadImage(downloadUrl)}
                  />
                  <TextPhoto>{photographer}</TextPhoto>
                  <FontAwesomeIcon
                    icon={faTimes}
                    color='red'
                    style={{ marginRight: "0.5rem", cursor: "pointer" }}
                    onClick={() => handleDeletePhoto(currentPhoto)}
                    size='1x'
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
