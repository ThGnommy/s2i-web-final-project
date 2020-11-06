import React, { useContext, useEffect } from "react";
import { SinglePhoto, PhotoContainer, TextPhoto } from "../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const PhotoMobile = ({
  image,
  photographer,
  photoArray,
  colorStar,
  downloadUrl,
}) => {
  const { setFavorites, favorites, mediaQuery } = useContext(StoreContext);

  let isFavorite = favorites.find((o) => o.id === colorStar.id);
  const starColor = isFavorite ? "yellow" : "white";

  const handleFavorite = (photo) => {
    if (!isFavorite) {
      setFavorites((prevState) => [...prevState, photo]);
    } else return;
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const downloadImage = () => {};

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
            <>
              <PhotoContainer
                as={motion.div}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
              >
                {/* Download icon */}
                <a href={downloadUrl} download='image'>
                  <FontAwesomeIcon
                    icon={faDownload}
                    color='green'
                    style={{ marginLeft: "0.5rem" }}
                    onClick={downloadImage}
                    size={mediaQuery.isMobile ? "4x" : "2x"}
                  />
                </a>
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
