import React, { useState, useContext } from "react";
import {
  SinglePhoto,
  PhotoContainer,
  TextPhoto,
} from "../../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import photoPropTypes from "./../../../../propTypes/propTypes";
import { deleteFavoritePhotoFromDB } from "../../../../api/firebase/favourite";

export const FavoritePhotoDesktop = ({
  image,
  photographer,
  currentPhoto,
  downloadUrl,
}) => {
  const [hover, setHover] = useState(false);

  const { setFavoritesPhotos, favoritesPhotos, downloadImage } = useContext(
    StoreContext
  );

  const isHover = () => {
    setHover(true);
  };

  const isNotHover = () => {
    setHover(false);
  };

  const handleDeletePhoto = async (photo) => {
    setFavoritesPhotos(favoritesPhotos.filter((o) => o.id !== photo.id));
    deleteFavoritePhotoFromDB(photo);
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ scale: 0 }}
        >
          <SinglePhoto
            as={motion.div}
            onMouseEnter={isHover}
            onMouseLeave={isNotHover}
            backgroundImage={`url(${image})`}
          >
            {hover && (
              <PhotoContainer
                as={motion.div}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
              >
                {/* Download icon */}
                <FontAwesomeIcon
                  icon={faDownload}
                  color="green"
                  style={{ marginLeft: "0.5rem", cursor: "pointer" }}
                  size="1x"
                  onClick={() => downloadImage(downloadUrl)}
                />
                <TextPhoto>{photographer}</TextPhoto>
                {/* Delete icon */}
                <FontAwesomeIcon
                  icon={faTimes}
                  color="red"
                  style={{ marginRight: "0.5rem", cursor: "pointer" }}
                  onClick={() => handleDeletePhoto(currentPhoto)}
                  size="1x"
                />
              </PhotoContainer>
            )}
          </SinglePhoto>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

FavoritePhotoDesktop.propType = photoPropTypes;
