import React, { useContext, useRef, useState, useEffect } from "react";
import {
  SingleVideo,
  VideoContainer,
  TextPhoto,
} from "../../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "../../../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import photoPropTypes from "../../../../propTypes/propTypes";
import { deleteFavoriteVideoFromDB } from "../../../../api/firebase/favourite";

export const FavoriteVideoMobile = ({
  video,
  photographer,
  currentPhoto,
  downloadUrl,
}) => {
  const {
    setFavoritesVideos,
    favoritesVideos,
    mediaQuery,
    downloadVideo,
  } = useContext(StoreContext);

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

  useEffect(() => {
    const ref = myVideo.current;
    return () => {
      ref.pause();
      console.log("video paused");
    };
  }, []);

  const handleDeletePhoto = async (video) => {
    setFavoritesVideos(favoritesVideos.filter((o) => o.id !== video.id));
    deleteFavoriteVideoFromDB(video);
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
          <SingleVideo as={motion.div}>
            <video loop ref={myVideo}>
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
            <VideoContainer>
              {/* Download icon */}
              <FontAwesomeIcon
                icon={faDownload}
                color="green"
                style={{ marginLeft: "0.5rem" }}
                size={mediaQuery.isMobile ? "4x" : "2x"}
                onClick={() => downloadVideo(downloadUrl)}
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
            </VideoContainer>
          </SingleVideo>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

FavoriteVideoMobile.propType = photoPropTypes;
