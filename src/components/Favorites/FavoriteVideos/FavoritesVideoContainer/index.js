import React, { useContext } from "react";
import { VideoList, Title } from "../../../../styled-component";
import { StoreContext } from "../../../../StoreContext";
import { FavoriteVideoMobile } from "../FavoriteVideoMobile";
import { FavoriteVideoDesktop } from "./../FavoriteVideoDesktop";

export const FavoritesVideoContainer = () => {
  const { favoritesVideos, mediaQuery } = useContext(StoreContext);

  return (
    <>
      {favoritesVideos.length > 0 ? (
        <VideoList>
          {favoritesVideos.map(
            (video) =>
              (mediaQuery.isDesktop && (
                <FavoriteVideoDesktop
                  currentPhoto={video}
                  key={video.id}
                  photographer={video.photographer}
                  video={video.src.video_files[1].link}
                  downloadUrl={video.downloadUrl}
                />
              )) ||
              (mediaQuery.isTablet && (
                <FavoriteVideoMobile
                  currentPhoto={video}
                  key={video.id}
                  photographer={video.photographer}
                  video={video.src.video_files[1].link}
                  downloadUrl={video.downloadUrl}
                />
              ))
          )}
        </VideoList>
      ) : (
        <Title>You don't have favorites.</Title>
      )}
    </>
  );
};
