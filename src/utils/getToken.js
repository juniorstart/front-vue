export const getToken = () => localStorage.getItem('JuniorToken') || sessionStorage.getItem('JuniorToken') || '';
