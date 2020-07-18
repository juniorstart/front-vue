export const setToken = (token, isRememberMeChecked) => {
  const KEY = 'JuniorToken';
  const tokenJSON = JSON.stringify(token);

  if (isRememberMeChecked) {
    localStorage.setItem(KEY, tokenJSON);
  } else {
    sessionStorage.setItem(KEY, tokenJSON);
  }
};
