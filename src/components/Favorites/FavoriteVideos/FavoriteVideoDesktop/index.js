import React, { useState, useRef, useEffect } from "react";
import {
  SingleVideo,
  VideoContainer,
  TextPhoto,
} from "../../../../styled-component";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import videoPropTypes from "./../../../../propTypes/propTypes";
import { deleteFavoriteVideoFromDB } from "../../../../api/firebase/favourite";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesVideos } from "../../../../redux/actions/mediaAction";
import { downloadVideo } from "../../../../utils";

export const FavoriteVideoDesktop = ({
  video,
  photographer,
  currentPhoto,
  downloadUrl,
}) => {
  const [hover, setHover] = useState(false);

  const { favoritesVideos } = useSelector((state) => state.media);
  const dispatch = useDispatch();
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

  const handleDeleteVideo = async (video) => {
    dispatch(
      setFavoritesVideos(favoritesVideos.filter((o) => o.id !== video.id))
    );
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

FavoriteVideoDesktop.propType = videoPropTypes.video;
