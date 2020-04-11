
const SESSION = 'session';

export const _storeToken = async (response: Response) => {
  const sessionToken = await response.headers.get("Authorization");
  if (sessionToken) {
    window.sessionStorage.setItem(SESSION, sessionToken);
  } else {
    throw new Error("Could not get token from response");
  }
};
export const _hasToken = () => {
    return !!window.sessionStorage.getItem(SESSION);
};
export const _removeToken = () => {
    window.sessionStorage.removeItem(SESSION);
};
export const _getToken =  () => {
    return window.sessionStorage.getItem(SESSION);
};




  