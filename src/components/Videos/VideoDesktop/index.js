import React, { useState, useContext, useRef, useEffect } from "react";
import {
  SingleVideo,
  VideoContainer,
  TextPhoto,
} from "../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { StoreContext } from "./../../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import videoPropTypes from "./../../../propTypes/propTypes";
import { favourite } from "./../../../api/firebase";
export const VideoDesktop = ({
  id,
  video,
  photographer,
  photoArray,
  colorStar,
  downloadUrl,
}) => {
  const [hover, setHover] = useState(false);

  const {
    setFavoritesVideos,
    favoritesVideos,
    downloadVideo,
    userIsLogged,
  } = useContext(StoreContext);

  const myVideo = useRef();

  const isHover = () => {
    setHover(true);
    myVideo.current.play();
  };

  const isNotHover = () => {
    setHover(false);
    myVideo.current.pause();
  };

  useEffect(() => {
    const ref = myVideo.current;
    return () => {
      ref.pause();
    };
  }, []);

  // Check for the favorite icon
  let isFavorite = favoritesVideos.find((o) => o.id === colorStar.id);
  const starColor = isFavorite ? "yellow" : "white";

  const handleFavorite = (video) => {
    if (!isFavorite) {
      setFavoritesVideos((prevState) => [...prevState, video]);
      favourite.addFavouriteVideo({
        id,
        src: video,
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
          <SingleVideo
            as={motion.div}
            onMouseEnter={isHover}
            onMouseLeave={isNotHover}
          >
            <video loop ref={myVideo}>
              <source src={`${video}`} type="video/mp4" />
            </video>
            {hover && (
              <>
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
                    onClick={() => downloadVideo(downloadUrl)}
                    size="1x"
                  />
                  <TextPhoto>{photographer}</TextPhoto>
                  {/* Favorite icon */}
                  {userIsLogged ? (
                    <FontAwesomeIcon
                      icon={faStar}
                      color={starColor}
                      style={{ marginRight: "0.5rem", cursor: "pointer" }}
                      onClick={() => handleFavorite(photoArray)}
                      size="1x"
                    />
                  ) : null}
                </VideoContainer>
              </>
            )}
          </SingleVideo>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

VideoDesktop.propType = videoPropTypes.video;
