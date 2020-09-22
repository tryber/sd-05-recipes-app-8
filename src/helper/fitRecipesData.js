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
  Object.keys(nameBase[type]).forEach((keyName) => {
    if (Object.keys(item).includes(keyName)) {
      newItem[nameBase[type][keyName]] = item[keyName];
    } else {
      newItem[keyName] = item[keyName];
    }
    return newItem;
  });
}

function parseRecipesData(inputData) {
  const inputType = Object.keys(inputData)[0];
  const oldData = [...inputData[inputType]];
  oldData.forEach((item) => itemParser(item, inputType));
  return oldData;
}

export default parseRecipesData;
