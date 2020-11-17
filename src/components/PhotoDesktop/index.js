import React, { useState, useContext, useEffect } from "react";
import { SinglePhoto, PhotoContainer, TextPhoto } from "../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import photoPropTypes from "./../../propTypes/propTypes";
import { favourite } from "./../../api/firebase";
export const PhotoDesktop = ({
  id,
  image,
  photographer,
  photoArray,
  colorStar,
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

  // Check for the favorite icon
  let isFavorite = favorites.find((o) => o.id === colorStar.id);
  const starColor = isFavorite ? "yellow" : "white";

  const handleFavorite = (photo) => {
    if (!isFavorite) {
      setFavorites((prevState) => [...prevState, photo]);
      favourite.addFavourite({ id, src: image, downloadUrl, photographer });
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
                  transition={{ duration: 0.4 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Download icon */}
                  <FontAwesomeIcon
                    icon={faDownload}
                    color='green'
                    style={{ marginLeft: "0.5rem", cursor: "pointer" }}
                    onClick={() => downloadImage(downloadUrl)}
                    size='1x'
                  />
                  <TextPhoto>{photographer}</TextPhoto>
                  {/* Favorite icon */}
                  <FontAwesomeIcon
                    icon={faStar}
                    color={starColor}
                    style={{ marginRight: "0.5rem", cursor: "pointer" }}
                    onClick={() => handleFavorite(photoArray)}
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

PhotoDesktop.propType = photoPropTypes;
