const getRecipeDetails = (type, id) => {
  const RECIPE_API = `https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(RECIPE_API).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
};

export default getRecipeDetails;
