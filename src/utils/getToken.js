export const getToken = () => JSON.parse(localStorage.getItem('JuniorToken') || sessionStorage.getItem('JuniorToken')) || '';
