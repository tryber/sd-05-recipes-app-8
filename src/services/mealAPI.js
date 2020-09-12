export const mealApi = 'https://www.themealdb.com/api/json/v1/1/';

export const fetchMealData = (search) => {
  const searchString = `${mealApi}${search}`;
  return fetch(searchString).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );
};

export const fetchCategories = () =>
  fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  ).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json),
      ),
  );
