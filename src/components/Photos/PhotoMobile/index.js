import React, { useContext } from "react";
import {
  SinglePhoto,
  PhotoContainer,
  TextPhoto,
} from "../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { favourite } from "./../../../api/firebase";
import photoPropTypes from "./../../../propTypes/propTypes";

export const PhotoMobile = ({
  id,
  image,
  photographer,
  photoArray,
  colorStar,
  downloadUrl,
}) => {
  const {
    setFavoritesPhotos,
    favoritesPhotos,
    mediaQuery,
    downloadImage,
  } = useContext(StoreContext);

  // Check for the favorite icon
  let isFavorite = favoritesPhotos.find((o) => o.id === colorStar.id);
  const starColor = isFavorite ? "yellow" : "white";

  const handleFavorite = (photo) => {
    if (!isFavorite) {
      setFavoritesPhotos((prevState) => [...prevState, photo]);
      favourite.addFavouritePhoto({
        id,
        src: image,
        downloadUrl,
        photographer,
      });
    } else return;
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
          <SinglePhoto as={motion.div} backgroundImage={`url(${image})`}>
            <>
              <PhotoContainer>
                {/* Download icon */}
                <FontAwesomeIcon
                  icon={faDownload}
                  color="green"
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => downloadImage(downloadUrl)}
                  size={mediaQuery.isMobile ? "4x" : "2x"}
                />
                <TextPhoto>{photographer}</TextPhoto>
                {/* Favorite icon */}
                <FontAwesomeIcon
                  icon={faStar}
                  color={starColor}
                  style={{ marginRight: "0.5rem" }}
                  onClick={() => handleFavorite(photoArray)}
                  size={mediaQuery.isMobile ? "4x" : "2x"}
                />
              </PhotoContainer>
            </>
          </SinglePhoto>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

PhotoMobile.propType = photoPropTypes.photos;
