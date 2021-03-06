import React, { useRef, useState, useEffect } from "react";
import {
  SingleVideo,
  VideoContainer,
  TextPhoto,
} from "../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { favourite } from "./../../../api/firebase";
import videoPropTypes from "./../../../propTypes/propTypes";
import { downloadVideo, mediaQuery } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesVideos } from "../../../redux/actions/mediaAction";

export const VideoMobile = ({
  id,
  video,
  photographer,
  photoArray,
  colorStar,
  downloadUrl,
}) => {
  const { userIsLogged } = useSelector((state) => state.user);
  const { favoritesVideos } = useSelector((state) => state.media);

  const dispatch = useDispatch();

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
    };
  }, []);

  // Check for the favorite icon
  let isFavorite = favoritesVideos.find((o) => o.id === colorStar.id);
  const starColor = isFavorite ? "yellow" : "white";

  const handleFavorite = (video) => {
    if (!isFavorite) {
      dispatch(setFavoritesVideos([...favoritesVideos, video]));
      favourite.addFavouriteVideo({
        id,
        src: video.video_files[0].link,
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

            <>
              <VideoContainer>
                {/* Download icon */}
                <FontAwesomeIcon
                  icon={faDownload}
                  color="green"
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => downloadVideo(downloadUrl)}
                  size={mediaQuery.isMobile ? "4x" : "2x"}
                />
                <TextPhoto>{photographer}</TextPhoto>
                {/* Favorite icon */}
                {userIsLogged ? (
                  <FontAwesomeIcon
                    icon={faStar}
                    color={starColor}
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => handleFavorite(photoArray)}
                    size={mediaQuery.isMobile ? "4x" : "2x"}
                  />
                ) : null}
              </VideoContainer>
            </>
          </SingleVideo>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

VideoMobile.propType = videoPropTypes.video;
