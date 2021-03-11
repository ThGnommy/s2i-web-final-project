import { db, auth } from "./instance";

export const addFavouritePhoto = async ({
  id,
  downloadUrl,
  src,
  photographer,
}) => {
  const doc = db.collection("users").doc(auth.currentUser.uid);
  const snapshotPhoto = await doc.get().then((r) => {
    if (r.exists && r.data().favsPhoto) {
      return r.data().favsPhoto;
    }
    return [];
  });

  await doc.get().then((r) => {
    if (r.exists) {
      doc
        .update({
          favsPhoto: snapshotPhoto.concat({
            id,
            downloadUrl,
            src,
            photographer,
          }),
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          throw Promise.reject(error);
        });
    } else {
      doc
        .set({
          favsPhoto: snapshotPhoto.concat({
            id,
            downloadUrl,
            src,
            photographer,
          }),
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    }
  });
};

export const addFavouriteVideo = async ({
  id,
  downloadUrl,
  src,
  photographer,
}) => {
  const doc = db.collection("users").doc(auth.currentUser.uid);
  const snapshotVideo = await doc.get().then((r) => {
    if (r.exists && r.data().favsVideo) {
      return r.data().favsVideo;
    }
    return [];
  });

  await doc.get().then((r) => {
    if (r.exists) {
      doc
        .update({
          favsVideo: snapshotVideo.concat({
            id,
            downloadUrl,
            src,
            photographer,
          }),
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    } else {
      doc
        .set({
          favsVideo: snapshotVideo.concat({
            id,
            downloadUrl,
            src,
            photographer,
          }),
        })
        .catch((error) => {
          throw Promise.reject(error);
        });
    }
  });
};

export const deleteFavoritePhotoFromDB = async (photo) => {
  const doc = db.collection("users").doc(auth.currentUser.uid);

  await doc.get().then((r) => {
    if (r.exists && r.data().favsPhoto) {
      r.data().favsPhoto.forEach((element) => {
        if (element.id === photo.id) {
          doc.update({
            favsPhoto: r.data().favsPhoto.filter((o) => o.id !== photo.id),
          });
        }
      });
    }
  });
};

export const deleteFavoriteVideoFromDB = async (video) => {
  const doc = db.collection("users").doc(auth.currentUser.uid);

  await doc.get().then((r) => {
    if (r.exists && r.data().favsVideo) {
      r.data().favsVideo.forEach((element) => {
        if (element.id === video.id) {
          doc.update({
            favsVideo: r.data().favsVideo.filter((o) => o.id !== video.id),
          });
        }
      });
    }
  });
};
