import axios from "axios";

const getImages = async (searchTerm) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID trS4V6UY2oYodCNAgYASlR1j8RNb9K20pG-z17OJpts",
    },
    params: {
      query: searchTerm,
    },
  });
  return response.data.results;
};

export default getImages;
