import React, { useContext } from "react";
import {
  SinglePhoto,
  PhotoContainer,
  TextPhoto,
} from "../../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import photoPropTypes from "./../../../../propTypes/propTypes";
import { deleteFavoritePhotoFromDB } from "../../../../api/firebase/favourite";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesPhotos } from "../../../../redux/actions/mediaAction";

export const FavoritePhotoMobile = ({
  image,
  photographer,
  currentPhoto,
  downloadUrl,
}) => {
  const { mediaQuery, downloadImage } = useContext(StoreContext);

  const { favoritesPhotos } = useSelector((state) => state.media);
  const dispatch = useDispatch();

  const handleDeletePhoto = async (photo) => {
    dispatch(
      setFavoritesPhotos(favoritesPhotos.filter((o) => o.id !== photo.id))
    );
    deleteFavoritePhotoFromDB(photo);
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
            <PhotoContainer>
              {/* Download icon */}
              <FontAwesomeIcon
                icon={faDownload}
                color="green"
                style={{ marginLeft: "0.5rem" }}
                size={mediaQuery.isMobile ? "4x" : "2x"}
                onClick={() => downloadImage(downloadUrl)}
              />
              <TextPhoto>{photographer}</TextPhoto>
              {/* Delete icon */}
              <FontAwesomeIcon
                icon={faTimes}
                color="red"
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

FavoritePhotoMobile.propType = photoPropTypes;
