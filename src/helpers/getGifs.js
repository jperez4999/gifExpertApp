export const getGift = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=n4DISqbo3WNpei6e3IDHXN9wxBIBcf4X`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    const { id, title, images } = img;
    return {
      id,
      title,
      url: images.downsized_medium.url,
    };
  });

  return gifs;
};
