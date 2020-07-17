export const setToken = (token, isRememberMeChecked) => {
  if (isRememberMeChecked) {
    localStorage.setItem('JuniorToken', token);
  } else {
    sessionStorage.setItem('JuniorToken', token);
  }
};
