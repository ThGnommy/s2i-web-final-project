import React from "react";
import { VideoList, Title } from "../../../../styled-component";
import { FavoriteVideoMobile } from "../FavoriteVideoMobile";
import { FavoriteVideoDesktop } from "./../FavoriteVideoDesktop";
import { useSelector } from "react-redux";
import { mediaQuery } from "../../../../utils";

export const FavoritesVideoContainer = () => {
  const { favoritesVideos } = useSelector((state) => state.media);

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
                  video={video.src || video.video_files[0].link}
                  downloadUrl={video.downloadUrl}
                />
              )) ||
              (mediaQuery.isTablet && (
                <FavoriteVideoMobile
                  currentPhoto={video}
                  key={video.id}
                  photographer={video.photographer}
                  video={video.src || video.video_files[0].link}
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
