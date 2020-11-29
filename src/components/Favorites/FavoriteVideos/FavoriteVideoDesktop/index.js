import React, { useState, useContext, useRef } from "react";
import {
  SingleVideo,
  VideoContainer,
  TextPhoto,
} from "../../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import photoPropTypes from "./../../../../propTypes/propTypes";
import { deleteFavoriteVideoFromDB } from "../../../../api/firebase/favourite";

export const FavoriteVideoDesktop = ({
  video,
  photographer,
  currentPhoto,
  downloadUrl,
}) => {
  const [hover, setHover] = useState(false);

  const { setFavoritesVideos, favoritesVideos, downloadVideo } = useContext(
    StoreContext
  );

  const myVideo = useRef();

  const isHover = () => {
    setHover(true);
    myVideo.current.play();
  };

  const isNotHover = () => {
    setHover(false);
    myVideo.current.pause();
  };

  const handleDeleteVideo = async (video) => {
    setFavoritesVideos(favoritesVideos.filter((o) => o.id !== video.id));
    deleteFavoriteVideoFromDB(video);
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
          <SingleVideo
            as={motion.div}
            onMouseEnter={isHover}
            onMouseLeave={isNotHover}
          >
            <video loop ref={myVideo}>
              <source src={`${video}`} type="video/mp4" />
            </video>
            {hover && (
              <VideoContainer
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
                  onClick={() => downloadVideo(downloadUrl)}
                />
                <TextPhoto>{photographer}</TextPhoto>
                {/* Delete icon */}
                <FontAwesomeIcon
                  icon={faTimes}
                  color="red"
                  style={{ marginRight: "0.5rem", cursor: "pointer" }}
                  onClick={() => handleDeleteVideo(currentPhoto)}
                  size="1x"
                />
              </VideoContainer>
            )}
          </SingleVideo>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

FavoriteVideoDesktop.propType = photoPropTypes;
