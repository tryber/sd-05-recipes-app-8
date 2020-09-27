export const favorite = 'favoriteRecipes';
export const inProgressRecipes = 'inProgressRecipes';

export function getLocalStorage(storageKey) {
  const local = localStorage.getItem(storageKey);
  const data = JSON.parse(local);
  return data;
};

export function saveLocalStorage(storageKey, data) {
  const jsonString = JSON.stringify(data);
  localStorage.setItem(storageKey, jsonString);
};
