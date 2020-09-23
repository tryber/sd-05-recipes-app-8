// https://stackoverflow.com/questions/13391579/how-to-rename-json-key/13391613#13391613

const nameBase = {
  meals: {
    idMeal: 'idx',
    strMeal: 'name',
    strMealThumb: 'strThumb',
  },
  drinks: {
    strIngredient1: 'strIngredient',
    idDrink: 'idx',
    strDrink: 'name',
    strDrinkThumb: 'strThumb',
  },
};

function itemParser(item, type) {
  const newItem = {};
  Object.keys(item).forEach((itemKey) => {
    if (Object.keys(nameBase[type]).includes(itemKey)) {
      newItem[nameBase[type][itemKey]] = item[itemKey];
    } else {
      newItem[itemKey] = item[itemKey];
    }
  });
  // console.log(item, newItem);
  return newItem;
}

function parseRecipesData(inputData) {
  const inputType = Object.keys(inputData)[0];
  const oldData = [...inputData[inputType]];
  const parsedData = [...oldData.map((item) => itemParser(item, inputType))];
  return parsedData;
}

export default parseRecipesData;
