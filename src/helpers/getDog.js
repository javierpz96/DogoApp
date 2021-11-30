const getDog = async (breedId) => {
  let url;

  if (breedId === 0) {
    url = "https://api.thedogapi.com/v1/images/search";
  } else {
    url = "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId;
  }

  //Como es un proceso asincrono hay que usar un await
  const res = await fetch(url);
  const [data] = await res.json();

  let {
    url: image,
    breeds: [breed],
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: "random",
      life_span:"random",
      temperament:"random",
    };
  }
  

  const dog = {
    image,
    breed,
  };

  return dog;
};

export default getDog;
