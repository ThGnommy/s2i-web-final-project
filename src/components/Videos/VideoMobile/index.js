import React, { useContext, useRef, useState } from "react";
import {
  SingleVideo,
  VideoContainer,
  TextPhoto,
} from "../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { favourite } from "./../../../api/firebase";
import videoPropTypes from "./../../../propTypes/propTypes";

export const VideoMobile = ({
  id,
  video,
  photographer,
  photoArray,
  colorStar,
  downloadUrl,
}) => {
  const { setFavorites, favorites, mediaQuery, downloadImage } = useContext(
    StoreContext
  );

  const myVideo = useRef();
  const [play, setPlay] = useState(false);

  const playVideo = () => {
    myVideo.current.play();
    setPlay(true);
  };

  const pauseVideo = () => {
    myVideo.current.pause();
    setPlay(false);
  };

  // Check for the favorite icon
  let isFavorite = favorites.find((o) => o.id === colorStar.id);
  const starColor = isFavorite ? "yellow" : "white";

  const handleFavorite = (photo) => {
    if (!isFavorite) {
      setFavorites((prevState) => [...prevState, photo]);
      favourite.addFavourite({ id, src: video, downloadUrl, photographer });
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
          <SingleVideo as={motion.div}>
            <video ref={myVideo}>
              <source src={`${video}`} type="video/mp4" />
            </video>
            {!play ? (
              <FontAwesomeIcon
                onClick={playVideo}
                icon={faPlay}
                color="white"
                size={mediaQuery.isMobile ? "4x" : "2x"}
              />
            ) : (
              <FontAwesomeIcon
                onClick={pauseVideo}
                icon={faPause}
                color="white"
                size={mediaQuery.isMobile ? "4x" : "2x"}
              />
            )}

            <>
              <VideoContainer>
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
              </VideoContainer>
            </>
          </SingleVideo>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

VideoMobile.propType = videoPropTypes.video;
