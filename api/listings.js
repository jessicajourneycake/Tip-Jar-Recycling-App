import client from "./client";

const endpoint = "/ws/tipjar";

const getListings = () => client.get(endpoint);

export const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("DATE", listing.DATE);
  data.append("NAME", listing.NAME);


  listing.images.forEach((image, index) =>
    data.append("IMAGE", {
      name: "IMAGE" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

 
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};