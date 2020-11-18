import { db, auth } from "./instance";

export const addFavourite = async ({ id, downloadUrl, src, photographer }) => {
  const doc = db.collection("users").doc(auth.currentUser.uid);
  const snapshot = await doc.get().then((r) => {
    if (r.exists && r.data().favs) {
      return r.data().favs;
    }
    return [];
  });

  doc
    .set({
      favs: snapshot.concat({
        id,
        downloadUrl,
        src,
        photographer,
      }),
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      throw Promise.reject(error);
    });
};

export const deleteFavourite = async (
  { id, downloadUrl, src, photographer },
  photo
) => {
  const doc = db.collection("users").doc(auth.currentUser.uid);
  const snapshot = await doc.get().then((r) => {
    if (r.exists && r.data().favs) {
      // return r.data().favs.filter((o) => o.id !== photo.id);
      r.data().favs.filter((o) => o.id !== photo.id);
    }
    return [];
  });

  doc
    .set({
      favs: snapshot.concat({
        id,
        downloadUrl,
        src,
        photographer,
      }),
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
      throw Promise.reject(error);
    });
};

// export const getFavorites = async (id) => {
//   const doc = db.collection("users").doc(auth.currentUser.uid);
//   await doc
//     .get()
//     .then((r) => {
//       if (r.exists && r.data().favs) {
//         console.log(r.data().favs);
//       }
//     })
//     .catch((error) => {
//       throw Promise.reject(error);
//     });
// };
