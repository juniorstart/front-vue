export const removeToken = () => {
  const KEY = 'JuniorToken';
  localStorage.removeItem(KEY);
  sessionStorage.removeItem(KEY);
};
